import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const CTAChecklistLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-2">
        <Skeleton className="h-8 w-1/5" />
        <Skeleton className="h-8 sm:h-10" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 w-3/5" />
        <div className="space-y-3">
          <Skeleton className="h-5" />
          <Skeleton className="h-5 w-5/6" />
          <Skeleton className="h-5 w-4/6" />
          <Skeleton className="h-5 w-5/6" />
          <Skeleton className="h-5 w-4/6" />
        </div>
      </div>
    </div>
  );
};

export default CTAChecklistLoader;
