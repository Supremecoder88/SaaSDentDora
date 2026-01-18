import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomeSection() {
  const user = await currentUser();

  return (
    <div className="relative z-10 flex items-center justify-between bg-linear-to-br from-blue-500/10 via-blue-500/5 to-background rounded-3xl p-8 border border-blue-500/20 mb-12 overflow-hidden">
      <div className="space-y-4">
       
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
          <div className="size-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-blue-500">Online & Ready</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2 text-foreground">
            Good{" "}
            {new Date().getHours() < 12
              ? "morning"
              : new Date().getHours() < 18
              ? "afternoon"
              : "evening"}
            , {user?.firstName}!
          </h1>
          <p className="text-muted-foreground">
            Your personal AI dental assistant is ready to help you maintain perfect oral health.
          </p>
        </div>
      </div>

     
      <div className="lg:flex hidden items-center justify-center size-32 bg-linear-to-br from-blue-500/20 to-blue-500/10 rounded-full ">
        <Image src="/logo3.png" alt="DentWise" width={64} height={64} className="w-16 h-16" />
      </div>
    </div>
  );
}