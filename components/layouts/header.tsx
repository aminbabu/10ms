import Navbar from "@/components/layouts/navbar";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}

const Header = ({ className }: IProps) => {
  return (
    <header
      className={cn(
        "bg-background border-b-border sticky top-0 z-50 border-b py-3",
        className,
      )}
    >
      <Navbar />
    </header>
  );
};

export default Header;
