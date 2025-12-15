import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MicIcon, CalendarIcon } from "lucide-react";

function CTA() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-linear-to-br from-muted/10 via-background to-muted/5">
      {/* Subtle Background Pattern (MODIFIED to blue-400) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--blue-400)/0.03),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              
              {/* BADGE (MODIFIED to blue-400) */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-linear-to-r from-blue-400/5 to-blue-400/10 rounded-full border border-blue-400/10">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-blue-400">Ready When You Are</span>
              </div>

              {/* HEADING (MODIFIED to blue-400) */}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your dental health
                </span>
                <br />
                <span className="bg-linear-to-r from-blue-400 to-blue-400/70 bg-clip-text text-transparent">
                  journey starts here
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Join 1,200+ patients who trust our AI for instant guidance and personalized care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              
              {/* Primary Button (MODIFIED to custom blue hex) */}
              <Button
                size="lg"
                className="px-6 py-3 font-semibold bg-linear-to-r from-[#4A90E2] to-[#4A90E2]/90 hover:from-[#3A7AD0] hover:to-[#3A7AD0]/85 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <MicIcon className="mr-2 h-4 w-4" />
                Start free chat
              </Button>
              
              {/* Secondary Button (MODIFIED border and hover background to blue-400) */}
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 font-semibold border border-blue-400/20 hover:border-blue-400/40 hover:bg-blue-400/5 transition-all duration-300 rounded-xl"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book appointment
              </Button>
            </div>
          </div>

          {/* Right Content - CTA Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Badge (Green is kept as it implies 'available' or 'online') */}
              <div className="absolute -top-4 left-4 bg-linear-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg z-10">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  Available 24/7
                </div>
              </div>

              {/* Main Image */}
              <div className="relative">
                {/* Subtle glow (MODIFIED to blue-400) */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-400/10 to-transparent rounded-2xl blur-xl scale-110"></div>

                <Image
                  src="/thumbsup.png"
                  alt="DentWise AI Assistant"
                  width={300}
                  height={300}
                  className="relative w-80 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Decorative Elements (MODIFIED to blue-400) */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-linear-to-br from-blue-400/10 to-blue-400/5 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;