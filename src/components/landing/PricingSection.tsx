import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "lucide-react";

function PricingSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-linear-to-b from-background via-muted/3 to-background">
      {/* Grid Background Pattern (MODIFIED to blue-400) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-br from-background via-muted/5 to-blue-400/5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[3rem_3rem] mask-[radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] opacity-20"></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--blue-400)/0.06),transparent_70%)]"></div> {/* MODIFIED: Assumes you have blue-400 defined as a CSS variable or this should use raw blue-400 */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          
          {/* BADGE (MODIFIED to blue-400) */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-400/5 to-blue-400/10 rounded-full border border-blue-400/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-400">Simple Pricing</span>
          </div>
          
          {/* HEADING (MODIFIED to blue-400) */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Choose your
            </span>
            <br />
            <span className="bg-linear-to-r from-blue-400 to-blue-400/70 bg-clip-text text-transparent">
              AI dental plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Book appointments for free and upgrade for unlimited AI consultations. Perfect for
            ongoing dental care.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Free Plan */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/10"> {/* MODIFIED border and shadow */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Free</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground mb-1">/month</span>
                  </div>
                  <p className="text-muted-foreground">Essential dental appointment booking</p>
                </div>
                <SignUpButton mode="modal">
                  <Button className="w-full py-3 bg-linear-to-r from-muted to-muted/80 text-foreground rounded-xl font-semibold">
                    Get Started Free
                  </Button>
                </SignUpButton>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Unlimited appointment booking</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Find dentists in your area</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Basic text chat support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Appointment reminders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className="relative group">
            {/* Popular Badge (MODIFIED to blue-400) */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-linear-to-r from-blue-400 to-blue-400/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Most Popular
              </div>
            </div>

            {/* Card Content (MODIFIED to blue-400) */}
            <div className="relative bg-linear-to-br from-card/95 to-card/70 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-400/30 hover:border-blue-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-400/20 scale-105">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">AI Basic</h3>
                  <div className="flex items-end gap-1">
                    {/* Price Gradient (MODIFIED to blue-400) */}
                    <span className="text-4xl font-bold bg-linear-to-r from-blue-400 to-blue-400/80 bg-clip-text text-transparent">
                      $9
                    </span>
                    <span className="text-muted-foreground mb-1">/month</span>
                  </div>
                  <p className="text-muted-foreground">AI consultations + appointment booking</p>
                </div>

                {/* CTA Button (MODIFIED to custom blue hex for consistency) */}
                <Button className="w-full py-3 bg-linear-to-r from-[#4A90E2] to-[#4A90E2]/90 hover:from-[#3A7AD0] hover:to-[#3A7AD0]/85 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start AI Basic
                </Button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Everything in Free</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">10 AI voice calls per month</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">AI dental guidance & advice</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Symptom assessment</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Priority support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Call history & recordings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-blue-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-400/10"> {/* MODIFIED border and shadow */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">AI Pro</h3>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">$19</span>
                    <span className="text-muted-foreground mb-1">/month</span>
                  </div>
                  <p className="text-muted-foreground">Unlimited AI consultations</p>
                </div>

                {/* CTA Button (MODIFIED border and hover background to blue-400) */}
                <Button
                  variant="outline"
                  className="w-full py-3 border-2 border-blue-400/20 hover:border-blue-400/40 hover:bg-blue-400/5 rounded-xl font-semibold transition-all duration-300"
                >
                  Upgrade to AI Pro
                </Button>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Everything in AI Basic</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Unlimited AI voice calls</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Advanced AI dental analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Personalized care plans</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">24/7 priority AI support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /> {/* MODIFIED to blue-400 */}
                    <span className="text-sm">Detailed health reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;