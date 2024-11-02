# **CV Application with AI Assistant**

A React-based CV application featuring an AI assistant that can answer questions about my professional background. The application consists of a Vite/React frontend and a FastAPI (Python) backend that interfaces with OpenAI's API.

## Technical Implementation Deep-Dive

### Advanced LLM Architecture

This project implements a sophisticated multi-stage AI processing pipeline that combines several advanced NLP techniques:

1. **Dual-Model Architecture**
   - Primary Content Generation: GPT-3.5-Turbo for knowledge-based responses
   - Style Transfer: Fine-tuned model for personality adaptation
   - Benefits: Separates content accuracy from style consistency

2. **Semantic Verification System**
   - BERT-based embedding comparison (using `sentence-transformers/bert-base-nli-mean-tokens`)
   - Cosine similarity measurement for semantic consistency
   - Automatic retry mechanism with enhanced prompting if consistency check fails

3. **Style Transfer Pipeline**
```plaintext
User Question → Content Generation → Style Transfer → Semantic Verification → Response
```

### Processing Flow

1. **Initial Content Generation**
   ```python
   async def get_content_response(question: str, system_prompt: str):
       # Uses GPT-3.5-Turbo with custom system prompt
       # Ensures factual accuracy and comprehensive responses
   ```

2. **Style Transformation**
   ```python
   async def style_transfer(content: str):
       # Uses fine-tuned model to maintain personal writing style
       # Preserves content while adapting tone and language
   ```

3. **Semantic Verification**
   ```python
   def verify_semantic_consistency(original: str, styled: str):
       # BERT embeddings comparison
       # Ensures meaning preservation during style transfer
       # Implements threshold-based verification
   ```

### Advanced Features

1. **Semantic Consistency Checking**
   - Uses BERT embeddings for deep semantic understanding
   - Implements cosine similarity measurements
   - Maintains configurable threshold for accuracy

2. **Automatic Recovery System**
   - Failed consistency checks trigger enhanced prompting
   - Multiple verification attempts with different strategies
   - Fallback mechanisms to ensure reliable responses

3. **Adaptive Processing Pipeline**
   ```plaintext
   ┌─────────────────┐
   │  User Question  │
   └────────┬────────┘
            ▼
   ┌─────────────────┐
   │ GPT-3.5 Content │
   │   Generation    │
   └────────┬────────┘
            ▼
   ┌─────────────────┐
   │  Style Transfer │
   │   (Fine-tuned)  │
   └────────┬────────┘
            ▼
   ┌─────────────────┐
   │    Semantic     │
   │  Verification   │
   └────────┬────────┘
            ▼
   ┌─────────────────┐
   │ Response/Retry  │
   │    Logic       │
   └─────────────────┘
   ```

### Model Configuration

1. **Content Generation Model**
   - Model: GPT-3.5-Turbo
   - Temperature: 0.7
   - Max Tokens: 300
   - Custom system prompting

2. **Style Transfer Model**
   - Fine-tuned model based on personal writing samples
   - Specialized prompt engineering for style preservation
   - Semantic consistency validation

3. **BERT Configuration**
   - Model: `sentence-transformers/bert-base-nli-mean-tokens`
   - Max sequence length: 512 tokens
   - Mean pooling strategy for embedding generation

### API Response Structure

```json
{
    "answer": "Styled response text",
    "verification": {
        "is_consistent": true,
        "similarity_score": 0.92,
        "threshold": 0.8
    }
}
```

### Error Handling and Reliability

1. **Semantic Consistency Failures**
   - Automatic retry with enhanced prompting
   - Fallback to original content if needed
   - Detailed verification reporting

2. **API Error Management**
   - Comprehensive exception handling
   - Detailed error reporting
   - Graceful degradation

3. **Performance Optimization**
   - Asynchronous processing
   - Efficient token usage
   - Optimized BERT embedding generation


# **Installation**

## Prerequisites

Before you begin, ensure you have:
- Python 3.8 or higher
- Node.js (v14 or higher recommended)
- An OpenAI API key
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Set up Python virtual environment:
```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

3. Install dependencies:
```bash
# Install Python backend dependencies
pip install -r server/requirements.txt

# Install frontend dependencies
cd [repository-name]
npm install
```

4. Set up environment variables:
   - Create a `.env` file in the server directory
   - Add your OpenAI API key and system prompt:
```plaintext
OPENAI_API_KEY=your_openai_api_key_here
SYSTEM_PROMPT=your_system_prompt_here
```

5. Place training documents:
   - Add your training data files (in .txt format) to the `server/training_documents` folder
   - **Note:** Ensure that `server/training_documents/` is added to `.gitignore` to prevent sensitive data from being pushed to the repository

## Preparing and Training the Model

If you have training data in `server/training_documents`, you can use the following scripts in the helpers folder to preprocess the data and train the model:

### Preprocess Training Data

Run the `prep_training_data.py` script to prepare your training data for model training:

```bash
# From the project root directory
cd server/helpers
python prep_training_data.py
```

This script will format and save the processed data, making it ready for training.

### Train the Model

Run the `train_model.py` script to train the model using the processed training data:

```bash
python train_model.py
```

Ensure you have the necessary OpenAI API credentials set in the `.env` file, as this script will interact with OpenAI's API to fine-tune the model.

## Running the Application

You need to run both the backend and frontend servers simultaneously:

1. Start the backend server:
```bash
# Ensure your virtual environment is activated
# From the project root directory
cd server
python main.py
```
The FastAPI server will start on port 3002.

2. In a new terminal, start the frontend development server:
```bash
# From the project root directory
npm run dev
```
The frontend will typically start on port 5173.

## Application Structure

```plaintext
project_root/
├── server/
│   ├── main.py              # FastAPI backend server
│   ├── requirements.txt      # Python dependencies
│   ├── .env                  # Environment variables
│   ├── training_documents/   # Folder for training data (not tracked by Git)
│   └── helpers/              # Helper scripts
│       ├── prep_training_data.py  # Script for preparing training data
│       └── train_model.py         # Script for training the model
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── AskAnything.jsx
│   │   ├── AboutMe.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   └── App.jsx              # Main React component
└── vite.config.js           # Vite configuration
```

## Features

- Interactive CV presentation
- AI-powered Q&A system about professional background
- Projects showcase
- About Me section
- Responsive design

## API Endpoints

- **POST /api/ask** - Send questions to the AI assistant
  - Request body: `{ "question": "your question here" }`
  - Response: `{ "answer": "AI response here" }`

## Development

The application uses Vite's proxy configuration to forward API requests from the frontend to the backend. All `/api/*` requests from the frontend are automatically proxied to `http://localhost:3002`.

## Environment Variables

Required environment variables in `server/.env`:
- `OPENAI_API_KEY` - Your OpenAI API key
- `SYSTEM_PROMPT` - System prompt for the AI assistant

## Important Notes

- **Training Data:** Place any training documents in the `server/training_documents` folder
- **.gitignore:** Ensure your `.gitignore` file has an entry for `server/training_documents/` to prevent sensitive data from being pushed to GitHub
- **Script Usage:** Run `prep_training_data.py` before `train_model.py` if you add or update training documents
- **Server Activation:** Both servers (frontend and backend) must be running for the application to work properly
- **Virtual Environment:** Always activate the virtual environment before running the backend server
- **Proxy Configuration:** The frontend proxy is configured to work in development mode

## Python Dependencies

Key backend dependencies include:
- FastAPI
- Pydantic
- python-dotenv
- openai
- uvicorn

These are all listed in `requirements.txt` and will be installed during setup.

## Troubleshooting

Common issues:

### If the AI assistant isn't responding:
- Ensure both servers are running
- Verify that your OpenAI API key is correctly set in `server/.env`
- Check your API usage and ensure you have sufficient credits
- Ensure the virtual environment is activated for the backend

### If the frontend can't connect to the backend:
- Verify that the backend is running on port 3002
- Check the proxy configuration in `vite.config.js`

### Virtual environment issues:
- Ensure you're in the correct directory when creating/activating the venv
- Verify Python path settings in your IDE (e.g., VS Code)
- Confirm that the correct Python interpreter (from the venv) is selected

## License

[Your chosen license]

## Contact

[Your contact information]