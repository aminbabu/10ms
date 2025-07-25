import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const CarouselLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("space-y-2.5", className)}>
      <Skeleton className="aspect-video" />
      <div className="flex gap-2 overflow-hidden">
        {Array.from({ length: 7 }).map((_, index) => (
          <Skeleton key={index} className="aspect-video shrink-0 basis-1/5" />
        ))}
      </div>
    </div>
  );
};

export default CarouselLoader;
