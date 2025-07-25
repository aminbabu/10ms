import { Skeleton } from "@/components/ui/skeleton";

const IntroLoader = () => {
  return (
    <div className="space-y-3 md:basis-[calc(100%-377px)] lg:basis-[calc(100%-448px)]">
      <div className="space-y-2">
        <Skeleton className="h-7" />
        <Skeleton className="h-7 w-1/2" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-5" />
        <Skeleton className="h-5" />
        <Skeleton className="h-5 w-1/2" />
      </div>
    </div>
  );
};

export default IntroLoader;
