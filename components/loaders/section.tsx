import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const SectionLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <Skeleton className="h-8 w-1/3 lg:h-10" />
      <Skeleton className="h-28 md:h-40 lg:h-48" />
    </div>
  );
};

export default SectionLoader;
