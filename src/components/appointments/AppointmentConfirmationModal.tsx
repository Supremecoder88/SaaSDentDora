import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, MailIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AppointmentConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointmentDetails: {
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    userEmail: string;
  };
}

export function AppointmentConfirmationModal({
  open,
  onOpenChange,
  appointmentDetails,
}: AppointmentConfirmationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-blue-500/10">
        <DialogHeader className="text-center space-y-4">
          {/* Success Icon Container updated to Blue */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
            <CheckCircleIcon className="h-8 w-8 text-blue-500" />
          </div>

          <DialogTitle className="text-xl font-semibold text-center text-foreground">
            Appointment Confirmed!
          </DialogTitle>

          <DialogDescription className="text-center text-muted-foreground">
            Your appointment has been successfully booked
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Email Notification Section */}
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <Image
                src="/email.png"
                alt="Email sent"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>

            <div className="text-center space-y-1">
              {/* Inbox detail text updated to Blue */}
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-blue-500">
                <MailIcon className="h-4 w-4" />
                Details sent to your inbox
              </div>
              {appointmentDetails?.userEmail && (
                <p className="text-xs text-muted-foreground">{appointmentDetails.userEmail}</p>
              )}
            </div>
          </div>

          {/* Appointment Summary with subtle Blue border */}
          {appointmentDetails && (
            <div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/10 space-y-3">
              <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-500/70 text-center mb-3">
                Quick Summary
              </h4>

              <div className="space-y-2">
                <div className="flex items-center gap-3 text-sm">
                  <UserIcon className="h-4 w-4 text-blue-500/60" />
                  <span className="font-medium text-foreground">{appointmentDetails.doctorName}</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <CalendarIcon className="h-4 w-4 text-blue-500/60" />
                  <span className="text-foreground">{appointmentDetails.appointmentDate}</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <ClockIcon className="h-4 w-4 text-blue-500/60" />
                  <span className="text-foreground">{appointmentDetails.appointmentTime}</span>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/appointments" className="w-full">
              <Button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-5 rounded-xl" 
                onClick={() => onOpenChange(false)}
              >
                View My Appointments
              </Button>
            </Link>

            <Button 
              variant="outline" 
              className="w-full border-blue-500/20 hover:bg-blue-500/5 text-muted-foreground hover:text-blue-500 py-5 rounded-xl" 
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center text-xs text-muted-foreground border-t border-blue-500/10 pt-4 italic">
            <p>
              Please arrive 15 minutes early for your appointment.
              <br />
              Need to reschedule? Contact us 24 hours in advance.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}