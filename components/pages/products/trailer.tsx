"use client";

import PlayButton from "@/components/common/play-button";
import { IMedia } from "@/interfaces/product";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import YouTube from "react-youtube";

interface IProps {
  data: IMedia;
  isActive: boolean;
}

const Trailer = ({ data, isActive }: IProps) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!isActive && playing) {
      setPlaying(false);
    }
  }, [isActive, playing]);

  const handlePlay = () => {
    setPlaying(true);
  };

  const playIcon = (
    <div className="bg-foreground/40 absolute inset-0 flex items-center justify-center">
      <PlayButton onPlay={handlePlay} />
    </div>
  );

  return (
    <div className="bg-foreground relative aspect-video">
      {data?.resource_type === "video" ? (
        <>
          {playing ? (
            <YouTube
              videoId={data.resource_value}
              className="h-full w-full"
              opts={{
                width: "100%",
                height: "100%",
                playerVars: {
                  autoplay: playing ? 1 : 0,
                  start: 0,
                  controls: 1,
                },
              }}
            />
          ) : (
            <>
              {playIcon}
              <Image
                src={
                  data.thumbnail_url ||
                  `https://img.youtube.com/vi/${data.resource_value}/hqdefault.jpg`
                }
                alt={data.name}
                width={480}
                height={270}
                className="h-full w-full object-cover"
              />
            </>
          )}
        </>
      ) : (
        <Image
          src={data.resource_value}
          alt={data.name}
          width={480}
          height={270}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

export default memo(Trailer);
