import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function DoctorCardSkeleton() {
  return (
    <Card className="cursor-pointer transition-all hover:shadow-lg border-blue-500/5">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          
          <Skeleton className="w-16 h-16 rounded-full bg-blue-500/5" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-32 bg-blue-500/5" />
            <Skeleton className="h-4 w-24 bg-blue-500/5" />
            <div className="flex items-center gap-2 mt-2">
              <Skeleton className="h-4 w-16 bg-blue-500/5" />
              <Skeleton className="h-4 w-20 bg-blue-500/5" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 bg-blue-500/5" />
          <Skeleton className="h-4 w-24 bg-blue-500/5" />
        </div>
        <div className="flex items-center gap-2">
          <Skeleton className="w-4 h-4 bg-blue-500/5" />
          <Skeleton className="h-4 w-32 bg-blue-500/5" />
        </div>
        <Skeleton className="h-12 w-full bg-blue-500/5" />
        <Skeleton className="h-6 w-20 bg-blue-500/5" />
      </CardContent>
    </Card>
  );
}

export function DoctorCardsLoading() {
  
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <DoctorCardSkeleton key={i} />
      ))}
    </div>
  );
}