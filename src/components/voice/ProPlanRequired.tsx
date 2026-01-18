"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CrownIcon, LockIcon, MicIcon } from "lucide-react";
import Link from "next/link";

function ProPlanRequired() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* Access Denied Section */}
        <div className="relative mb-12 overflow-hidden">
         
          <div className="bg-linear-to-br from-blue-500/10 via-blue-500/5 to-background rounded-3xl p-8 border border-blue-500/20">
            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-4">
                
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                  <LockIcon className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-blue-500">Pro Feature</span>
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2 text-foreground">Voice Assistant Access Required</h1>
                  <p className="text-muted-foreground">
                    Upgrade to AI Pro or AI Basic to unlock unlimited voice consultations with our
                    AI dental assistant.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block">
                
                <div className="w-32 h-32 bg-linear-to-br from-blue-500/20 to-blue-500/10 rounded-full flex items-center justify-center">
                  <MicIcon className="w-16 h-16 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/30 max-w-2xl mx-auto">
          <CardContent className="relative p-8 text-center">
            
            <div className="w-20 h-20 bg-linear-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <LockIcon className="w-10 h-10 text-blue-500" />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-foreground">Upgrade Required</h3>
            <p className="text-muted-foreground mb-6">
              The voice assistant feature is available to AI Pro and AI Basic subscribers. Get
              instant dental advice through natural voice conversations.
            </p>

            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">24/7 voice consultations</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Professional dental guidance</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Instant pain relief advice</span>
              </div>
            </div>

            <Link href="/pro">
              
              <Button className="w-full bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CrownIcon className="mr-2 h-5 w-5" />
                Upgrade to Pro
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ProPlanRequired;