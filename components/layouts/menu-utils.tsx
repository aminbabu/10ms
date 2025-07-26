import LocaleSwitcher from "@/components/common/locale-switcher";
import CTAButton from "@/components/layouts/call-to-action-button";
import LoginButton from "@/components/layouts/login-button";
import { cn } from "@/lib/utils";

interface IProps {
  className?: string;
}

const MenuUtils = ({ className }: IProps) => {
  return (
    <div className={cn("flex items-center gap-x-1 md:gap-x-2", className)}>
      <LocaleSwitcher />
      <CTAButton />
      <LoginButton />
    </div>
  );
};

export default MenuUtils;
