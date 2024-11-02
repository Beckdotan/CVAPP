# CV Application with AI Assistant

This is a React-based CV application featuring an AI assistant that can answer questions about my professional background. The application consists of a Vite/React frontend and a FastAPI (Python) backend that interfaces with OpenAI's API.

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
npm install react @vitejs/plugin-react vite
```

4. Set up environment variables:
- Create a `.env` file in the server directory
- Add your OpenAI API key and system prompt:
```
OPENAI_API_KEY=your_openai_api_key_here
SYSTEM_PROMPT=your_system_prompt_here
```

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

```
project_root/
├── server/
│   ├── main.py         # FastAPI backend server
│   ├── requirements.txt # Python dependencies
│   └── .env            # Environment variables
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── AskAnything.jsx
│   │   ├── AboutMe.jsx
│   │   ├── Projects.jsx
│   │   └── Footer.jsx
│   └── App.jsx         # Main React component
└── vite.config.js      # Vite configuration
```

## Features
- Interactive CV presentation
- AI-powered Q&A system about professional background
- Projects showcase
- About Me section
- Responsive design

## API Endpoints
- `POST /api/ask` - Send questions to the AI assistant
  - Request body: `{ "question": "your question here" }`
  - Response: `{ "answer": "AI response here" }`

## Development
The application uses Vite's proxy configuration to forward API requests from the frontend to the backend. All `/api/*` requests from the frontend are automatically proxied to `http://localhost:3002`.

## Environment Variables
Required environment variables in `server/.env`:
- `OPENAI_API_KEY` - Your OpenAI API key
- `SYSTEM_PROMPT` - System prompt for the AI assistant

## Important Notes
- Never commit your `.env` file or expose your OpenAI API key
- Both servers (frontend and backend) must be running for the application to work properly
- Always activate the virtual environment before running the backend server
- The frontend proxy is configured to work in development mode

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

1. If the AI assistant isn't responding, check if:
   - Both servers are running
   - Your OpenAI API key is properly set in `server/.env`
   - You have sufficient API credits
   - Your virtual environment is activated

2. If the frontend can't connect to the backend:
   - Verify the backend is running on port 3002
   - Check the proxy configuration in `vite.config.js`

3. Virtual environment issues:
   - Ensure you're in the correct directory when creating/activating the venv
   - Verify Python path is correctly set in VS Code
   - Check that VS Code is using the correct Python interpreter from the venv

## License
[Your chosen license]

## Contact
[Your contact information]