// Simple test endpoint to verify serverless functions are working
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    return res.status(200).json({
        message: 'API is working!',
        method: req.method,
        hasApiKey: !!process.env.GOOGLE_API_KEY,
        timestamp: new Date().toISOString()
    });
}
