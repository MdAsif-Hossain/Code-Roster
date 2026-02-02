import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// Manual .env reading
const envPath = path.resolve(process.cwd(), '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const apiKeyMatch = envContent.match(/GOOGLE_API_KEY=(.*)/);
const apiKey = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!apiKey) {
    console.error('API Key not found in .env');
    process.exit(1);
}

console.log('Testing Gemini API with key starting:', apiKey.substring(0, 4));

async function run() {
    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

        const prompt = "Say hello";
        console.log('Sending prompt:', prompt);

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log('Response:', text);
    } catch (error) {
        console.error('Error testing Gemini:', JSON.stringify(error, null, 2));
        if (error.response) {
            console.error('Response status:', error.response.status);
            console.error('Response statusText:', error.response.statusText);
        }
    }
}

run();
