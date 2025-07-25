"use client";

import PlayButton from "@/components/common/play-button";
import { IMedia } from "@/interfaces/product";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import ReactPlayer from "react-player";

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

  const videoUrl = `https://www.youtube.com/watch?v=${data.resource_value}`;

  const playIcon = (
    <div className="bg-foreground/40 absolute inset-0 flex items-center justify-center">
      <PlayButton onPlay={handlePlay} />
    </div>
  );

  return (
    <div className="bg-foreground relative aspect-video">
      {data?.resource_type === "video" ? (
        <>
          <ReactPlayer
            src={videoUrl}
            playing={playing}
            controls
            light={data.thumbnail_url ?? true}
            width="100%"
            height="100%"
            playIcon={playIcon}
            config={{
              youtube: {
                autoplay: playing ? 1 : 0,
                start: 0,
              },
            }}
          />
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
