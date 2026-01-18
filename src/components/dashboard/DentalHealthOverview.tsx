import { getUserAppointmentStats } from "@/lib/actions/appointments";
import { currentUser } from "@clerk/nextjs/server";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { BrainIcon, MessageSquareIcon } from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { Button } from "../ui/button";

async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
         
          <BrainIcon className="size-5 text-blue-500" />
          Your Dental Health
        </CardTitle>
        <CardDescription>Keep track of your dental care journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            
            <div className="text-2xl font-bold text-blue-500 mb-1">
              {appointmentStats.completedAppointments}
            </div>
            <div className="text-sm text-muted-foreground">Completed Visits</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-xl">
            
            <div className="text-2xl font-bold text-blue-500 mb-1">
              {appointmentStats.totalAppointments}
            </div>
            <div className="text-sm text-muted-foreground">Total Appointments</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-xl">
           
            <div className="text-2xl font-bold text-blue-500 mb-1">
              {format(new Date(user?.createdAt!), "MMM yyyy")}
            </div>
            <div className="text-sm text-muted-foreground">Member Since</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-linear-to-r from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20">
          <div className="flex items-start gap-3">
          
            <div className="size-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
              <MessageSquareIcon className="size-5 text-blue-500" />
            </div>
            <div>
              <h4 className="font-semibold text-blue-500 mb-1">Ready to get started?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Book your first appointment or try our AI voice assistant for instant dental advice.
              </p>
              <div className="flex gap-2">
                <Link href="/voice">
                  
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white">
                    Try AI Assistant
                  </Button>
                </Link>
                <Link href="/appointments">
                 
                  <Button size="sm" variant="outline" className="border-blue-500/20 hover:bg-blue-500/5 hover:text-blue-500">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DentalHealthOverview;