import { getUserAppointments } from "@/lib/actions/appointments";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import NoNextAppointments from "./NoNextAppointments";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";

async function NextAppointment() {
  const appointments = await getUserAppointments();

  // filter for upcoming CONFIRMED appointments only (today or future)
  const upcomingAppointments =
    appointments?.filter((appointment) => {
      const appointmentDate = parseISO(appointment.date);
      const today = new Date();
      const isUpcoming = isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);
      return isUpcoming && appointment.status === "CONFIRMED";
    }) || [];

  // get the next appointment (earliest upcoming one)
  const nextAppointment = upcomingAppointments[0];

  if (!nextAppointment) return <NoNextAppointments />; // no appointments, return nothing

  const appointmentDate = parseISO(nextAppointment.date);
  const formattedDate = format(appointmentDate, "EEEE, MMMM d, yyyy");
  const isToday = isSameDay(appointmentDate, new Date());

  return (
    
    <Card className="border-blue-500/20 bg-linear-to-br from-blue-500/5 to-background">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
         
          <CalendarIcon className="size-5 text-blue-500" />
          Next Appointment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-500">
              {isToday ? "Today" : "Upcoming"}
            </span>
          </div>
          <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
            {nextAppointment.status}
          </span>
        </div>

        {/* Appointment Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
           
            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <UserIcon className="size-4 text-blue-500" />
            </div>
            <div>
              <p className="font-medium text-sm">{nextAppointment.doctorName}</p>
              <p className="text-xs text-muted-foreground">{nextAppointment.reason}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            
            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <CalendarIcon className="size-4 text-blue-500" />
            </div>
            <div>
              <p className="font-medium text-sm">{formattedDate}</p>
              <p className="text-xs text-muted-foreground">
                {isToday ? "Today" : format(appointmentDate, "EEEE")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            
            <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <ClockIcon className="size-4 text-blue-500" />
            </div>
            <div>
              <p className="font-medium text-sm">{nextAppointment.time}</p>
              <p className="text-xs text-muted-foreground">Local time</p>
            </div>
          </div>
        </div>

        {/* More Appointments Count */}
        {upcomingAppointments.length > 1 && (
          <p className="text-xs text-center text-muted-foreground pt-2">
            +{upcomingAppointments.length - 1} more upcoming appointment
            {upcomingAppointments.length > 2 ? "s" : ""}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default NextAppointment;