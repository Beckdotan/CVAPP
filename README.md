# CV Application with AI Assistant

This is a React-based CV application featuring an AI assistant that can answer questions about my professional background. The application consists of a Vite/React frontend and an Express.js backend that interfaces with OpenAI's API.

## Prerequisites

Before you begin, ensure you have:
- Node.js installed (v14 or higher recommended)
- An OpenAI API key
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
# Install backend dependencies
npm install express remult dotenv axios

# Install frontend dependencies
npm install react @vitejs/plugin-react vite
```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add your OpenAI API key:
     ```
     OPENAI_API_KEY=your_openai_api_key_here
     ```

## Running the Application

You need to run both the backend and frontend servers simultaneously:

1. Start the backend server:
```bash
# From the project root directory
node src/server/index.js
```
The server will start on port 3002.

2. In a new terminal, start the frontend development server:
```bash
# From the project root directory
npm run dev
```
The frontend will typically start on port 5173.

## Application Structure

- `index.js` - Express backend server
- `App.jsx` - Main React component
- `vite.config.js` - Vite configuration
- Components directory:
  - `Header.jsx`
  - `AskAnything.jsx`
  - `AboutMe.jsx`
  - `Projects.jsx`
  - `Footer.jsx`

## Features

- Interactive CV presentation
- AI-powered Q&A system about professional background
- Projects showcase
- About Me section
- Responsive design

## API Endpoints

- `POST /api/ask` - Send questions to the AI assistant
- `GET /api/hi` - Test endpoint

## Development

The application uses Vite's proxy configuration to forward API requests from the frontend to the backend. All `/api/*` requests from the frontend are automatically proxied to `http://localhost:3002`.

## Environment Variables

Required environment variables:
- `OPENAI_API_KEY` - Your OpenAI API key

## Important Notes

- Never commit your `.env` file or expose your OpenAI API key
- Both servers (frontend and backend) must be running for the application to work properly
- The frontend proxy is configured to work in development mode

## Troubleshooting

Common issues:
1. If the AI assistant isn't responding, check if:
   - Both servers are running
   - Your OpenAI API key is properly set in `.env`
   - You have sufficient API credits

2. If the frontend can't connect to the backend:
   - Verify the backend is running on port 3002
   - Check the proxy configuration in `vite.config.js`

## License

[Your chosen license]

## Contact

[Your contact information]
