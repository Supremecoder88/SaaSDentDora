import { APPOINTMENT_TYPES } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import DoctorInfo from "./DoctorInfo";

interface BookingConfirmationStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooking: boolean;
  onBack: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

function BookingConfirmationStep({
  selectedDentistId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooking,
  onBack,
  onConfirm,
  onModify,
}: BookingConfirmationStepProps) {
  const appointmentType = APPOINTMENT_TYPES.find((t) => t.id === selectedType);

  return (
    <div className="space-y-6">
      {/* Header with back button */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="ghost" onClick={onBack} className="hover:text-blue-500 hover:bg-blue-50">
          <ChevronLeftIcon className="w-4 h-4 mr-2" />
          Back
        </Button>
        <h2 className="text-2xl font-semibold">Confirm Your Appointment</h2>
      </div>

      <Card className="max-w-2xl border-blue-500/10">
        <CardHeader>
          <CardTitle>Appointment Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* doctor info */}
          <DoctorInfo doctorId={selectedDentistId} />

          {/* appointment details */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-500/10">
            <div>
              <p className="text-sm text-muted-foreground">Appointment Type</p>
              <p className="font-medium">{appointmentType?.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-medium">{appointmentType?.duration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date</p>
              <p className="font-medium">
                {new Date(selectedDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Time</p>
              <p className="font-medium">{selectedTime}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-medium">Dental Center</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Cost</p>
              {/* Changed text-primary to text-blue-500 */}
              <p className="font-medium text-blue-500">{appointmentType?.price}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* action buttons */}
      <div className="flex gap-4 pt-4">
        <Button 
          variant="outline" 
          onClick={onModify} 
          className="hover:border-blue-500/40 hover:text-blue-500"
        >
          Modify Appointment
        </Button>
        
        <Button 
          onClick={onConfirm} 
          className="bg-blue-500 hover:bg-blue-600 text-white min-w-[140px]" 
          disabled={isBooking}
        >
          {isBooking ? "Booking..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
}

export default BookingConfirmationStep;