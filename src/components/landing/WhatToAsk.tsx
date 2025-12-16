import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

function WhatToAsk() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-linear-to-b from-background to-muted/20">
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-400/5 to-blue-400/10 rounded-full border border-blue-400/10 backdrop-blur-sm mb-6">
            <MessageCircleIcon className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              AI-Powered Conversations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-linear-to-r from-blue-400 to-blue-400/70 bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple questions to complex concerns, our AI delivers expert-level
            guidance trained on thousands of real dental cases
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">
              Common questions our AI answers:
            </h3>

            {/* Chat bubbles */}
            {[ 
              `"My tooth hurts when I bite down"`,
              `"How much does teeth whitening cost?"`,
              `"When should I replace my filling?"`
            ].map((text, i) => (
              <div key={i} className="bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-6 border border-border/50 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-400/20 to-blue-400/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageSquareIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="bg-blue-400/5 rounded-2xl p-4 border border-blue-400/10">
                      <p className="font-semibold text-blue-400">{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-blue-400/30 transition-all duration-500">
            <div className="flex items-center justify-center h-full">
              <Image
                src="/confuse.png"
                alt="AI Assistant"
                width={500}
                height={500}
                className="w-full h-auto max-w-lg object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhatToAsk;
