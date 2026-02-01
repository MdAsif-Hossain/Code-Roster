import { Zap } from "lucide-react";

export const PoweredBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border-2 border-primary rounded-none brutal-shadow">
      <Zap className="w-4 h-4 text-primary fill-primary" />
      <span className="font-mono text-sm font-bold text-foreground">
        Powered by <span className="text-primary">Gemini 1.5</span> & Anger
      </span>
    </div>
  );
};
