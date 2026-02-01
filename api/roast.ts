import { GoogleGenerativeAI } from '@google/generative-ai';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the image from request body
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'No image provided' });
    }

    // Check if API key is configured
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      console.error('GOOGLE_API_KEY is not configured');
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Initialize Google Generative AI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Prepare the prompt
    const prompt = `You are a world-famous, angry, British head chef (Gordon Ramsay persona). Review this code screenshot. ROAST the style, indentation, and logic. Be funny, aggressive, and loud. Use cooking metaphors. Keep it under 150 words.`;

    // Extract base64 data and detect MIME type
    let mimeType = 'image/jpeg'; // default
    let base64Data = image;

    // Check if it's a data URL and extract MIME type
    const dataUrlMatch = image.match(/^data:(image\/\w+);base64,/);
    if (dataUrlMatch) {
      mimeType = dataUrlMatch[1];
      base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    }

    // Generate content with the image
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Data,
          mimeType: mimeType,
        },
      },
    ]);

    const response = await result.response;
    const roast = response.text();

    // Return the roast
    return res.status(200).json({ roast });
  } catch (error) {
    console.error('Error generating roast:', error);
    return res.status(500).json({
      error: 'Failed to generate roast',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
