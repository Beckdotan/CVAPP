import json
import os
from typing import List, Dict
import openai
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import AutoTokenizer, AutoModel
import torch
import torch.nn.functional as F
import numpy as np
import uvicorn

# Load environment variables
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
FINE_TUNED_MODEL = os.getenv("FINE_TUNED_MODEL")
openai.api_key = OPENAI_API_KEY
SYSTEM_PROMPT = os.getenv("SYSTEM_PROMPT")

# Initialize FastAPI
app = FastAPI()

# Initialize BERT for semantic similarity
tokenizer = AutoTokenizer.from_pretrained('sentence-transformers/bert-base-nli-mean-tokens')
model = AutoModel.from_pretrained('sentence-transformers/bert-base-nli-mean-tokens')

class QuestionRequest(BaseModel):
    question: str

def get_bert_embeddings(text: str) -> torch.Tensor:
    inputs = tokenizer(text, return_tensors='pt', padding=True, truncation=True, max_length=512)
    with torch.no_grad():
        outputs = model(**inputs)
    embeddings = outputs.last_hidden_state.mean(dim=1)
    return embeddings

def calculate_semantic_similarity(text1: str, text2: str) -> float:
    emb1 = get_bert_embeddings(text1)
    emb2 = get_bert_embeddings(text2)
    similarity = F.cosine_similarity(emb1, emb2).item()
    return similarity

async def get_content_response(question: str, system_prompt: str) -> str:
    try:
        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": question}
            ],
            temperature=0.7,
            max_tokens=300
        )
        return response.choices[0].message.content
    except Exception as e:
        raise Exception(f"Error in content generation: {str(e)}")

async def style_transfer(content: str) -> str:
    try:
        response = await openai.ChatCompletion.acreate(
            model=FINE_TUNED_MODEL,
            messages=[
                {"role": "system", "content": "Rewrite the following text in my writing style, keeping the same meaning and information. Please use First person language like you are Dotan Beck(!) :"},
                {"role": "user", "content": content}
            ],
            temperature=0.7,
            max_tokens=300
        )
        return response.choices[0].message.content
    except Exception as e:
        raise Exception(f"Error in style transfer: {str(e)}")

def verify_semantic_consistency(original: str, styled: str, threshold: float = 0.8) -> Dict:
    similarity = calculate_semantic_similarity(original, styled)
    is_consistent = similarity >= threshold
    return {
        "is_consistent": is_consistent,
        "similarity_score": similarity,
        "threshold": threshold
    }

@app.post("/api/ask")
async def ask_question(request: QuestionRequest):
    try:
        # Step 1: Generate content based on knowledge/context
        system_prompt = SYSTEM_PROMPT
        content_response = await get_content_response(request.question, system_prompt)
        print(f"Generated Content (LLM): {content_response}")

        # Step 2: First attempt at style transfer
        styled_response = await style_transfer(content_response)
        print(f"Styled Response (First Attempt): {styled_response}")

        # Step 3: First verification
        verification_result = verify_semantic_consistency(content_response, styled_response)
        print(f"Verification Result (First Attempt): {verification_result}")

        # If first attempt fails, try again with enhanced prompt
        if not verification_result["is_consistent"]:
            print("First attempt failed, trying second attempt with enhanced prompt...")
            styled_response = await style_transfer(
                f"Maintain exact meaning while styling. Original: {content_response}"
            )
            verification_result = verify_semantic_consistency(content_response, styled_response)
            print("Second Attempt - Styled Response:", styled_response)
            print("Second Attempt - Verification Result:", verification_result)
            
            # If second attempt fails, try one final time with even stricter prompt
            if not verification_result["is_consistent"]:
                print("Second attempt failed, trying final attempt with strict prompt...")
                styled_response = await style_transfer(
                    f"Keep the exact same meaning and information, only adjust the writing style. Do not add or remove any information. Text to style: {content_response}"
                )
                verification_result = verify_semantic_consistency(content_response, styled_response)
                print("Final Attempt - Styled Response:", styled_response)
                print("Final Attempt - Verification Result:", verification_result)
                
                # If all style transfer attempts fail, return original content
                if not verification_result["is_consistent"]:
                    print("All style transfer attempts failed. Returning original content.")
                    return {
                        "answer": content_response,
                        "warning": "Style transfer failed to maintain semantic consistency after multiple attempts",
                        "verification": verification_result,
                        "attempts": 3
                    }
        
        # Return the successful styled response with verification result
        return {
            "answer": styled_response,
            "verification": verification_result,
            "attempts": 3 if not verification_result["is_consistent"] else 1
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=3002)
