from fastapi import FastAPI                  # Main framework
from pydantic import BaseModel               # Data validation
from dotenv import load_dotenv               # Environment variables
import openai                                # OpenAI API client
import uvicorn                               # Server
import os

# Load .env file
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
openai.api_key = OPENAI_API_KEY  # Set API key

SYSTEM_PROMPT = os.getenv("SYSTEM_PROMPT")

# Initialize FastAPI
app = FastAPI()

# Define request model with Pydantic
class QuestionRequest(BaseModel):
    question: str

@app.post("/api/ask")
async def ask_question(request: QuestionRequest):  # Pydantic validates input
    try:
        response = await openai.ChatCompletion.acreate(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.question}
            ],
            max_tokens=150
        )
        answer = response.choices[0].message.content
        return {"answer": answer}
    except Exception as e:
        return {"error": str(e)}

# Run with uvicorn
if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=3002)
