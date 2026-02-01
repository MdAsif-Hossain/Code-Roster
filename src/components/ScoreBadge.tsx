import { Flame, Skull, AlertTriangle } from "lucide-react";

interface ScoreBadgeProps {
  score: string;
}

export const ScoreBadge = ({ score }: ScoreBadgeProps) => {
  return (
    <div className="relative inline-flex flex-col items-center">
      {/* Badge Container */}
      <div className="relative">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
        
        {/* Main badge */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-card border-4 border-primary flex items-center justify-center neon-glow">
          {/* Inner circle */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-charcoal-deep border-2 border-primary/50 flex flex-col items-center justify-center">
            {/* Score */}
            <span className="font-display text-4xl md:text-5xl font-black text-primary neon-text-glow">
              {score}
            </span>
          </div>
        </div>
        
        {/* Decorative icons */}
        <Flame className="absolute -top-2 -right-2 w-8 h-8 text-warning-orange animate-bounce" />
        <Skull className="absolute -bottom-1 -left-1 w-6 h-6 text-primary animate-pulse" />
      </div>
      
      {/* Label */}
      <div className="mt-4 flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary rounded-none">
        <AlertTriangle className="w-4 h-4 text-primary" />
        <span className="font-mono text-sm font-bold text-primary uppercase tracking-wider">
          Final Grade
        </span>
      </div>
    </div>
  );
};
