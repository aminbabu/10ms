"use client";

import Trailer from "@/components/pages/products/trailer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IMedia } from "@/interfaces/product";
import { cn } from "@/lib/utils";
import { UseEmblaCarouselType } from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface IProps {
  data: Array<IMedia>;
  className?: string;
}

const Trailers = ({ data, className }: IProps) => {
  const [api, setApi] = useState<UseEmblaCarouselType[1] | null>(null);
  const [thumbApi, setThumbApi] = useState<UseEmblaCarouselType[1] | null>(
    null,
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api || !thumbApi) return;
      api.scrollTo(index);
    },
    [api, thumbApi],
  );

  const onSelect = useCallback(() => {
    if (!api || !thumbApi) return;

    const currentSlide = api.selectedScrollSnap();

    setSelectedIndex(currentSlide);
    thumbApi.scrollTo(currentSlide);
  }, [api, thumbApi, setSelectedIndex]);

  // Watch for active slide changes
  useEffect(() => {
    if (!api) return;

    onSelect();

    api.on("select", onSelect).on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className={cn("space-y-2.5 md:w-[345px] lg:w-[400px]", className)}>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {data.map((item, idx) => (
            <CarouselItem key={item.resource_value}>
              <Trailer data={item} isActive={selectedIndex === idx} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 disabled:pointer-events-auto" />
        <CarouselNext className="right-2 disabled:pointer-events-auto" />
      </Carousel>
      <Carousel setApi={setThumbApi} className="px-3">
        <CarouselContent className="-ml-2">
          {data.map((item, idx) => (
            <CarouselItem
              key={item.resource_value}
              className="aspect-video basis-1/6 cursor-pointer pl-2"
              onClick={() => onThumbClick(idx)}
            >
              <Image
                src={
                  item.resource_type === "video"
                    ? item.thumbnail_url
                    : item.resource_value
                }
                alt={item.name}
                width={160}
                height={90}
                className={cn(
                  "hover:border-border h-full w-full border-2 border-transparent object-cover transition-all duration-300",
                  {
                    "rounded border-green-500 hover:border-green-500":
                      idx === selectedIndex,
                  },
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Trailers;
