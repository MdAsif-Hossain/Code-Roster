import { ChefHat } from "lucide-react";

interface RoastOutputProps {
  isLoading: boolean;
  loadingMessage: string;
  result: string | null;
  score?: string | null;
}

export const RoastOutput = ({ isLoading, loadingMessage, result, score }: RoastOutputProps) => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    month: '2-digit', 
    day: '2-digit', 
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });

  if (isLoading) {
    return (
      <div className="bg-charcoal-deep border-2 border-muted p-6 md:p-8 min-h-[200px] font-mono rounded-sm">
        <div className="flex flex-col items-center justify-center h-full min-h-[150px] gap-4">
          <div className="relative">
            <ChefHat className="w-16 h-16 text-primary animate-spin-slow" />
          </div>
          <p className="text-lg text-primary animate-pulse">
            {loadingMessage || "Loading..."}
          </p>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="relative mx-auto max-w-lg">
      {/* Paper shadow */}
      <div className="absolute inset-0 bg-black/30 blur-md translate-x-2 translate-y-2 rounded-sm" />
      
      {/* Crumpled receipt paper */}
      <div 
        className="relative bg-[#f5f0e6] p-6 md:p-8 rounded-sm overflow-hidden"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"),
            linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.03) 50%, transparent 100%),
            linear-gradient(45deg, rgba(139,119,42,0.08) 0%, transparent 40%, rgba(139,119,42,0.05) 100%)
          `,
          boxShadow: 'inset 0 0 60px rgba(0,0,0,0.1), inset 0 0 20px rgba(139,119,42,0.1)',
        }}
      >
        {/* Grease stains */}
        <div 
          className="absolute top-8 right-12 w-20 h-16 rounded-full opacity-20 blur-sm"
          style={{ background: 'radial-gradient(ellipse, rgba(180,150,80,0.6) 0%, transparent 70%)' }}
        />
        <div 
          className="absolute bottom-16 left-8 w-14 h-10 rounded-full opacity-15 blur-sm rotate-45"
          style={{ background: 'radial-gradient(ellipse, rgba(160,130,60,0.5) 0%, transparent 70%)' }}
        />
        
        {/* Crumple lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(87deg, transparent 48%, rgba(0,0,0,0.15) 49%, rgba(0,0,0,0.15) 51%, transparent 52%),
              linear-gradient(167deg, transparent 48%, rgba(0,0,0,0.1) 49%, rgba(0,0,0,0.1) 51%, transparent 52%),
              linear-gradient(23deg, transparent 48%, rgba(255,255,255,0.3) 49%, rgba(255,255,255,0.3) 51%, transparent 52%)
            `
          }}
        />

        {/* Receipt content */}
        <div className="relative z-10 font-receipt text-[#1a1a1a]">
          {/* Header */}
          <div className="text-center border-b-2 border-dashed border-[#1a1a1a]/30 pb-4 mb-4">
            <p className="text-3xl md:text-4xl tracking-wider">★ SPAGHETTI CHEF ★</p>
            <p className="text-xl mt-1">CODE REVIEW RECEIPT</p>
            <p className="text-lg mt-2 opacity-70">{currentDate}</p>
          </div>

          {/* Order details */}
          <div className="space-y-2 text-xl border-b-2 border-dashed border-[#1a1a1a]/30 pb-4 mb-4">
            <div className="flex justify-between">
              <span>ORDER #</span>
              <span>{Math.floor(Math.random() * 9000 + 1000)}</span>
            </div>
            <div className="flex justify-between">
              <span>TABLE</span>
              <span>DISASTER ZONE</span>
            </div>
            <div className="flex justify-between">
              <span>SERVER</span>
              <span>CHEF RAMSAY AI</span>
            </div>
          </div>

          {/* The Roast */}
          <div className="py-4 border-b-2 border-dashed border-[#1a1a1a]/30 mb-4">
            <p className="text-lg opacity-70 mb-2">CHEF'S NOTES:</p>
            <p className="text-2xl md:text-3xl leading-relaxed font-bold">
              {result}
            </p>
          </div>

          {/* Totals */}
          <div className="space-y-2 text-xl">
            <div className="flex justify-between">
              <span>QUALITY:</span>
              <span>UNACCEPTABLE</span>
            </div>
            <div className="flex justify-between">
              <span>EDIBLE:</span>
              <span>NO</span>
            </div>
            <div className="flex justify-between text-2xl font-bold border-t-2 border-[#1a1a1a]/50 pt-2 mt-2">
              <span>TOTAL SHAME:</span>
              <span>∞</span>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 pt-4 border-t-2 border-dashed border-[#1a1a1a]/30">
            <p className="text-lg opacity-70">THANK YOU FOR YOUR</p>
            <p className="text-xl">TERRIBLE CODE</p>
            <p className="text-lg mt-2 opacity-50">NO REFUNDS • NO EXCUSES</p>
          </div>

          {/* Barcode */}
          <div className="mt-6 flex justify-center">
            <div className="flex gap-[2px]">
              {Array.from({ length: 40 }).map((_, i) => (
                <div 
                  key={i}
                  className="bg-[#1a1a1a]"
                  style={{ 
                    width: Math.random() > 0.5 ? '2px' : '3px',
                    height: '30px'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Red Ink Severity Stamp */}
        {score && (
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] pointer-events-none"
            style={{ filter: 'url(#rough)' }}
          >
            <div 
              className="relative px-8 py-4 border-[6px] border-[#c41e3a] rounded-lg"
              style={{
                boxShadow: 'inset 0 0 0 3px #c41e3a',
              }}
            >
              {/* Stamp texture overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise2)'/%3E%3C/svg%3E")`,
                  mixBlendMode: 'multiply',
                }}
              />
              
              <div className="text-center relative">
                <p 
                  className="font-display text-5xl md:text-6xl font-black tracking-tight"
                  style={{ 
                    color: '#c41e3a',
                    textShadow: '2px 2px 0 rgba(196,30,58,0.3)',
                  }}
                >
                  {score}
                </p>
                <p 
                  className="font-display text-lg font-bold tracking-[0.3em] mt-1"
                  style={{ color: '#c41e3a' }}
                >
                  SEVERITY
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Torn bottom edge */}
      <div className="relative h-6 overflow-hidden">
        <svg viewBox="0 0 400 24" className="w-full h-6 absolute -top-[1px]" preserveAspectRatio="none">
          <path 
            d="M0,0 L0,12 Q10,8 20,12 T40,12 T60,12 T80,12 T100,12 T120,12 T140,12 T160,12 T180,12 T200,12 T220,12 T240,12 T260,12 T280,12 T300,12 T320,12 T340,12 T360,12 T380,12 T400,12 L400,0 Z" 
            fill="#f5f0e6"
          />
        </svg>
      </div>

      {/* SVG Filter for rough stamp edges */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
