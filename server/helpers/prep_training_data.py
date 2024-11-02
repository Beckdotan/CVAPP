import json
import os
from typing import List, Dict
import openai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def rewrite_chunk(chunk: str) -> str:
    """Send a chunk to ChatGPT to rewrite it in your style."""
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # or whichever model you prefer
        messages=[
            {"role": "system", "content": "Rewrite the following text."},
            {"role": "user", "content": chunk}
        ]
    )
    return response['choices'][0]['message']['content'].strip()

def create_training_pairs(documents_dir: str) -> List[Dict]:
    """
    Convert your documents into training pairs for fine-tuning.
    Each document will be split into chunks, rewritten using ChatGPT, and prepared for training.
    """
    training_pairs = []
    total_files = len([f for f in os.listdir(documents_dir) if f.endswith('.txt')])
    file_count = 0
    
    # Read all documents in the specified directory
    for filename in os.listdir(documents_dir):
        if filename.endswith('.txt'):  # Adjust if you have different file formats
            file_count += 1
            print(f"\nProcessing file {file_count}/{total_files}: {filename}")
            
            with open(os.path.join(documents_dir, filename), 'r', encoding='utf-8') as file:
                content = file.read()
                
                # Split content into paragraphs
                paragraphs = [p.strip() for p in content.split('\n\n') if p.strip()]
                total_paragraphs = len(paragraphs)
                
                # Process each paragraph
                for i, paragraph in enumerate(paragraphs):
                    rewritten_text = rewrite_chunk(paragraph)
                    
                    # Append to training pairs
                    training_pairs.append({
                        "messages": [
                            {"role": "system", "content": "You are an assistant that writes the given message in my style."},
                            {"role": "user", "content": rewritten_text },
                            {"role": "assistant", "content": paragraph}
                        ]
                    })
                    
                    # Show progress for paragraphs within the file
                    print(f"  Processed paragraph {i+1}/{total_paragraphs}")
    
    print("\nAll files processed successfully.")
    return training_pairs

def save_training_file(training_pairs: List[Dict], output_file: str):
    """Save the training pairs in JSONL format as required by OpenAI"""
    with open(output_file, 'w', encoding='utf-8') as f:
        for pair in training_pairs:
            f.write(json.dumps(pair) + '\n')
    print(f"\nTraining data saved to {output_file}")

# Usage
documents_directory = "../training_documents"
output_file = "training_data.jsonl"

training_pairs = create_training_pairs(documents_directory)
save_training_file(training_pairs, output_file)
