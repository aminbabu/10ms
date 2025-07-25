import { List, ListItem } from "@/components/common/typography";
import { cn } from "@/lib/utils";
import { RiStarSFill } from "@remixicon/react";

const RatingStars = ({ className }: { className?: string }) => {
  return (
    <List className={cn("flex gap-0 text-yellow-500", className)}>
      {Array.from({ length: 5 }, (_, index) => (
        <ListItem key={index}>
          <RiStarSFill />
        </ListItem>
      ))}
    </List>
  );
};

export default RatingStars;
