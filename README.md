# 🔥 Code Roaster

> **Your code is RAW!** Get brutally honest AI-powered code reviews from a Gordon Ramsay-inspired AI chef.

![Neon Brutalism Design](https://img.shields.io/badge/Design-Neon%20Brutalism-ff3366?style=for-the-badge)
![Powered by Gemini](https://img.shields.io/badge/AI-Google%20Gemini%201.5%20Flash-4285F4?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

## 🎯 About

Code Roaster is a fun, interactive web app that uses Google's Gemini 1.5 Flash AI to roast your code screenshots with the personality of Gordon Ramsay. Upload a screenshot of your code and receive hilariously brutal (but constructive) feedback delivered in true Hell's Kitchen style!

## ✨ Features

- 🤖 **AI-Powered Roasts** - Real-time code analysis using Google Gemini 1.5 Flash
- 👨‍🍳 **Gordon Ramsay Persona** - Get roasted by an AI with the personality of a world-famous angry chef
- 🎨 **Neon Brutalism Design** - Eye-catching, modern UI with bold colors and animations
- 🧾 **Receipt-Style Output** - Your roast delivered on a beautiful, crumpled receipt
- 🔒 **Secure API** - API keys protected using Vercel Serverless Functions
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom Neon Brutalism theme
- **UI Components**: shadcn/ui + Radix UI
- **AI**: Google Gemini 1.5 Flash API
- **Backend**: Vercel Serverless Functions
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))
- Vercel account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd code-roaster
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   GOOGLE_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npx vercel dev
   ```
   
   > ⚠️ **Important**: You must use `npx vercel dev` instead of `npm run dev` to enable serverless functions locally.

5. **Open your browser**
   
   Navigate to `http://localhost:3000` (or the port shown in your terminal)

## 📦 Deployment

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Set environment variables in Vercel**
   - Go to your project settings in the Vercel dashboard
   - Navigate to "Environment Variables"
   - Add `GOOGLE_API_KEY` with your API key
   - Redeploy if necessary

## 🎮 Usage

1. Upload a screenshot of your code (PNG, JPG, or GIF)
2. Click the **"ROAST MY CODE"** button
3. Watch the loading animation as the AI chef analyzes your code
4. Receive your roast on a beautiful receipt-style output
5. Laugh (or cry) at the brutal honesty!

## 🏗️ Project Structure

```
code-roaster/
├── api/
│   └── roast.ts              # Vercel serverless function for Gemini API
├── src/
│   ├── components/
│   │   ├── DropZone.tsx      # File upload component
│   │   ├── RoastButton.tsx   # Main action button
│   │   ├── RoastOutput.tsx   # Receipt-style result display
│   │   └── ui/               # shadcn/ui components
│   ├── pages/
│   │   └── Index.tsx         # Main page
│   ├── index.css             # Neon Brutalism styles
│   └── main.tsx              # App entry point
├── vercel.json               # Vercel configuration
├── .env.example              # Environment variables template
└── package.json
```

## 🎨 Design Philosophy

This project uses a **Neon Brutalism** design system featuring:
- Bold, high-contrast colors (neon red on dark charcoal)
- Sharp, geometric shapes with no rounded corners
- Brutal box shadows for depth
- Neon glow effects for emphasis
- Scanline overlays for a retro-tech aesthetic
- Playful animations (shake, pulse, float)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Powered by [Google Gemini AI](https://ai.google.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Inspired by Gordon Ramsay's legendary kitchen rants
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

**Made with 🔥 and a lot of roasting**
