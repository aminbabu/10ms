import { Button } from "@/components/ui/button";
import { RiPlayFill } from "@remixicon/react";
import { ComponentProps } from "react";

interface IProps extends ComponentProps<"button"> {
  onPlay: () => void;
}

const PlayButton = ({ onPlay }: IProps) => {
  return (
    <Button
      variant="link"
      onClick={onPlay}
      className="bg-background shadow-background/25 size-14 cursor-pointer rounded-full text-green-500 shadow-[0_0_0_4px] transition-all duration-300 ease-in-out hover:shadow-[0_0_0_6px]"
    >
      <RiPlayFill className="size-8" />
    </Button>
  );
};

export default PlayButton;
