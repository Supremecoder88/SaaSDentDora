import { useAvailableDoctors } from "@/hooks/use-doctors";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { MapPinIcon, PhoneIcon, StarIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { DoctorCardsLoading } from "./DoctorCardsLoading";

interface DoctorSelectionStepProps {
  selectedDentistId: string | null;
  onSelectDentist: (dentistId: string) => void;
  onContinue: () => void;
}

function DoctorSelectionStep({
  onContinue,
  onSelectDentist,
  selectedDentistId,
}: DoctorSelectionStepProps) {
  const { data: dentists = [], isLoading } = useAvailableDoctors();

  if (isLoading)
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Choose Your Dentist</h2>
        <DoctorCardsLoading />
      </div>
    );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Choose Your Dentist</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              /* Changed ring-primary to ring-blue-500 */
              selectedDentistId === dentist.id ? "ring-2 ring-blue-500 border-transparent" : ""
            }`}
            onClick={() => onSelectDentist(dentist.id)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <Image
                  src={dentist.imageUrl!}
                  alt={dentist.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border border-blue-500/10"
                />
                <div className="flex-1">
                  <CardTitle className="text-lg">{dentist.name}</CardTitle>
                  
                  <CardDescription className="text-blue-500 font-medium">
                    {dentist.speciality || "General Dentistry"}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">5</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({dentist.appointmentCount} appointments)
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPinIcon className="w-4 h-4 text-blue-500/60" />
                <span>DentWise</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <PhoneIcon className="w-4 h-4 text-blue-500/60" />
                <span>{dentist.phone}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {dentist.bio || "Experienced dental professional providing quality care."}
              </p>
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-700 hover:bg-blue-500/20 border-none">
                Licensed Professional
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedDentistId && (
        <div className="flex justify-end pt-4">
          <Button 
            onClick={onContinue} 
            className="bg-blue-500 hover:bg-blue-600 text-white px-8"
          >
            Continue to Time Selection
          </Button>
        </div>
      )}
    </div>
  );
}
export default DoctorSelectionStep;