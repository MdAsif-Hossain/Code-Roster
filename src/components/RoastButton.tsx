import { Flame, Loader2 } from "lucide-react";

interface RoastButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export const RoastButton = ({ onClick, disabled, isLoading }: RoastButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        group
        w-full
        py-5 md:py-6 px-8
        bg-primary text-primary-foreground
        font-display text-xl md:text-2xl font-black uppercase tracking-wider
        border-4 border-foreground
        rounded-none
        brutal-shadow-lg
        transition-all duration-200
        disabled:opacity-40 disabled:cursor-not-allowed
        ${!disabled && !isLoading ? "hover:animate-shake hover:neon-glow" : ""}
        ${isLoading ? "animate-pulse-glow" : ""}
        active:translate-x-1 active:translate-y-1 active:shadow-none
      `}
    >
      <span className="flex items-center justify-center gap-3">
        {isLoading ? (
          <>
            <Loader2 className="w-7 h-7 animate-spin" />
            <span>ROASTING...</span>
          </>
        ) : (
          <>
            <span>ROAST MY CODE</span>
            <Flame className="w-7 h-7 group-hover:animate-bounce" />
          </>
        )}
      </span>
    </button>
  );
};
