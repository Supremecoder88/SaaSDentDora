import { useAvailableDoctors } from "@/hooks/use-doctors";
import Image from "next/image";

function DoctorInfo({ doctorId }: { doctorId: string }) {
  const { data: doctors = [] } = useAvailableDoctors();
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) return null;

  return (
    <div className="flex items-center gap-4">
      <Image
        src={doctor.imageUrl!}
        alt={doctor.name}
        width={48}
        height={48}
        
        className="w-12 h-12 rounded-full object-cover border border-blue-500/20"
      />
      <div>
        <h3 className="font-medium text-foreground">{doctor.name}</h3>
        {/* Speciality text is already muted, but will pop against the blue accents elsewhere */}
        <p className="text-sm text-muted-foreground">{doctor.speciality || "General Dentistry"}</p>
      </div>
    </div>
  );
}

export default DoctorInfo;