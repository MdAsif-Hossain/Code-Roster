import { useState, useCallback, useEffect } from "react";
import { ChefHat, Flame, Trash2, Code, Upload, AlertTriangle, Zap } from "lucide-react";
import { DropZone } from "@/components/DropZone";
import { RoastButton } from "@/components/RoastButton";
import { RoastOutput } from "@/components/RoastOutput";
import { ScoreBadge } from "@/components/ScoreBadge";
import { PoweredBadge } from "@/components/PoweredBadge";

const LOADING_MESSAGES = [
  "Taste testing...",
  "Finding the lamb sauce...",
  "Holding back vomit...",
  "Consulting Gordon...",
  "Counting semicolons...",
  "Detecting spaghetti patterns...",
  "Measuring indentation crimes...",
  "Heating up the roast...",
];

const Index = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [roastResult, setRoastResult] = useState<string | null>(null);
  const [score, setScore] = useState<string | null>(null);

  const handleFileDrop = useCallback((droppedFile: File) => {
    setFile(droppedFile);
    setRoastResult(null);
    setScore(null);
  }, []);

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const handleRoast = useCallback(async () => {
    if (!file) return;

    setIsLoading(true);
    setRoastResult(null);
    setScore(null);

    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      setLoadingMessage(LOADING_MESSAGES[messageIndex % LOADING_MESSAGES.length]);
      messageIndex++;
    }, 400);

    try {
      // Convert file to base64
      const base64Image = await convertFileToBase64(file);

      // Call the API
      const response = await fetch('/api/roast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Image }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `API error: ${response.status}`);
      }

      const data = await response.json();

      clearInterval(messageInterval);
      setIsLoading(false);
      setRoastResult(data.roast || "IT'S RAW! The API didn't return a proper roast!");

      // Generate a random score
      const scores = ["F-", "F", "D-", "0/10", "1/10", "-3/10"];
      setScore(scores[Math.floor(Math.random() * scores.length)]);
    } catch (error) {
      clearInterval(messageInterval);
      setIsLoading(false);

      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setRoastResult(`WHAT ARE YOU DOING?! The kitchen's on fire! Error: ${errorMessage}`);
      setScore("ERROR");
    }
  }, [file]);

  const handleClear = useCallback(() => {
    setFile(null);
    setRoastResult(null);
    setScore(null);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Scanline overlay */}
      <div className="fixed inset-0 scanlines pointer-events-none z-50" />

      {/* Background decorations */}
      <div className="absolute top-20 left-10 opacity-5">
        <Code className="w-40 h-40 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <ChefHat className="w-48 h-48 text-primary" />
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Hero Section */}
        <header className="text-center mb-12 md:mb-16">
          {/* Chef Hat Icon */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <ChefHat className="w-16 h-16 md:w-20 md:h-20 text-primary animate-float" />
              <Flame className="w-6 h-6 md:w-8 md:h-8 text-warning-orange absolute -bottom-1 -right-1 animate-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-4 tracking-tight">
            YOUR CODE IS{" "}
            <span className="text-primary neon-text-glow">RAW!</span>{" "}
            <span className="inline-block animate-bounce">🍝</span>
          </h1>

          {/* Subheadline */}
          <p className="font-mono text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Upload a screenshot. Get roasted by the{" "}
            <span className="text-primary font-semibold">Gordon Ramsay</span> of AI.
          </p>

          {/* Powered Badge */}
          <PoweredBadge />
        </header>

        {/* Interaction Zone */}
        <main className="space-y-6 md:space-y-8">
          {/* Drop Zone */}
          <DropZone
            onFileDrop={handleFileDrop}
            file={file}
            onClear={handleClear}
            disabled={isLoading}
          />

          {/* Roast Button */}
          <RoastButton
            onClick={handleRoast}
            disabled={!file || isLoading}
            isLoading={isLoading}
          />

          {/* Output Area */}
          {(isLoading || roastResult) && (
            <RoastOutput
              isLoading={isLoading}
              loadingMessage={loadingMessage}
              result={roastResult}
              score={score}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="mt-16 md:mt-24 text-center">
          <p className="font-mono text-xs text-muted-foreground opacity-60">
            No code was actually harmed in this roasting. Probably.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
