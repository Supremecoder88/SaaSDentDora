import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

function NoNextAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
         
          <CalendarIcon className="size-5 text-blue-500" />
          Next Appointment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8 text-muted-foreground">
         
          <div className="w-16 h-16 bg-blue-500/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CalendarIcon className="size-8 text-blue-500 opacity-40" />
          </div>
          <p className="text-sm mb-4">No upcoming appointments</p>
          <Link href="/appointments">
            
            <Button 
              size="sm" 
              variant="outline" 
              className="w-full border-blue-500/20 hover:bg-blue-500/5 hover:text-blue-500 transition-colors"
            >
              Schedule Your Next Visit
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default NoNextAppointments;