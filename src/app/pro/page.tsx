import Navbar from "@/components/Navbar";
import { PricingTable } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { CrownIcon } from "lucide-react";
import { redirect } from "next/navigation";

async function ProPage() {
  const user = await currentUser();

  if (!user) redirect("/");

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="mb-12 overflow-hidden">
          <div className="flex items-center justify-between bg-linear-to-br from-blue-500/10 via-blue-500/5 to-background rounded-3xl p-8 border border-blue-500/20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20 ">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-blue-500">Upgrade to Pro Version</span>
              </div>

              <div>
                <h1 className="text-4xl font-bold mb-2 text-foreground">Unlock Premium AI Dental Care</h1>
                <p className="text-muted-foreground">
                  Get unlimited AI consultations and advanced features.
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="w-32 h-32 bg-linear-to-br from-blue-500/20 to-blue-500/10 rounded-full flex items-center justify-center">
                <CrownIcon className="w-16 h-16 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* PRICING SECTION */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Choose Your Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your dental care needs. All plans include secure access
              and bank-level encryption.
            </p>
          </div>

         
          <PricingTable />
        </div>
      </div>
    </>
  );
}

export default ProPage;