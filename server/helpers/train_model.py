import openai
from dotenv import load_dotenv
import os
import time

# Load environment variables
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

def prepare_for_fine_tuning(file_path: str):
    """Upload and prepare the file for fine-tuning"""
    with open(file_path, 'rb') as file:
        response = openai.File.create(
            file=file,
            purpose='fine-tune'
        )
    return response.id

def start_fine_tuning(file_id: str):
    """Start the fine-tuning process and check job status"""
    response = openai.FineTuningJob.create(
        training_file=file_id,
        model="gpt-3.5-turbo"  # or whichever base model you prefer
    )
    
    fine_tuning_job_id = response.id
    print(f"Fine-tuning job created: {fine_tuning_job_id}")

    # Check job status and get fine-tuned model ID when complete
    fine_tuned_model = check_job_status(fine_tuning_job_id)
    if fine_tuned_model:
        # Save the model ID in the .env file
        with open('../.env', 'a') as f:
            f.write(f'\nFINE_TUNED_MODEL="{fine_tuned_model}"\n')
        print(f"Fine-tuned model ID: {fine_tuned_model}")
    else:
        print("Fine-tuning failed or did not complete successfully.")

    return fine_tuned_model

def check_job_status(job_id: str, interval: int = 60):
    """Check the status of the fine-tuning job periodically (default every 60 seconds)"""
    while True:
        response = openai.FineTuningJob.retrieve(job_id)
        status = response.status
        print(f"Current job status: {status}")

        if status == 'succeeded':
            # Return the fine-tuned model ID if successful
            return response.fine_tuned_model
        elif status == 'failed':
            # If the job failed, return None
            return None
        
        time.sleep(interval)

# Usage
file_path = "training_data.jsonl"
file_id = prepare_for_fine_tuning(file_path)
fine_tuned_model = start_fine_tuning(file_id)
print(f"Fine-tuned model name: {fine_tuned_model}")
