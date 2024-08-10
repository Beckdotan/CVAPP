import express from "express";
import { remultExpress } from 'remult/remult-express';
import dotenv from 'dotenv';
import axios from 'axios'; // Using import statement

dotenv.config();
const app = express();
// Initialize Remult as Express middleware
const api = remultExpress();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


app.use(api);

app.get('/api/hi', (req,res) =>  res.send('Hi my name is dotan'));
app.listen(3002, () => console.log("started server"));


app.post('/api/ask', async (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ error: 'Question is required' });
    }

    const systemPrompt = `
    You are an AI that answers questions about [Your Name]'s work history. Here is some context:
    - [Your Name] is a Data Scientist with experience in [specific fields, e.g., machine learning, AI, etc.].
    - They have worked at [Company A] as [Position] from [Date] to [Date], where they did [describe key responsibilities and projects].
    - Additional skills include [list any other skills, tools, certifications].
    `;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: question }
                ],
                max_tokens: 150,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );

        const answer = response.data.choices[0].message.content.trim();
        res.json({ answer });

    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: 'Failed to get a response from the API' });
    }
});

