import { MicIcon } from "lucide-react";

function WelcomeSection() {
  return (
    <div className="z-10 flex items-center justify-between bg-linear-to-br from-blue-500/10 via-blue-500/5 to-background rounded-3xl p-8 border border-blue-500/20 mb-12 overflow-hidden">
      <div className="space-y-4">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-blue-500">Voice Assistant Ready</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">AI Voice Assistant</h1>
          <p className="text-muted-foreground">
            Talk to your AI dental assistant using natural voice commands. Get instant advice and
            professional guidance.
          </p>
        </div>
      </div>

      <div className="hidden lg:block">
        
        <div className="w-32 h-32 bg-linear-to-br from-blue-500/20 to-blue-500/10 rounded-full flex items-center justify-center relative">
          
          <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping" />
          <MicIcon className="w-16 h-16 text-blue-500 relative z-10" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;