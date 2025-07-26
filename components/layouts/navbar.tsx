import BrandLogo from "@/components/common/brand-logo";
import Container from "@/components/common/container";
import { SearchForm } from "@/components/common/search-form";
import MenuButton from "@/components/layouts/menu-button";
import MenuUtils from "@/components/layouts/menu-utils";
import MobileNavMenu from "@/components/layouts/mobile-nav-menu";
import NavMenu from "@/components/layouts/nav-menu";

interface IProps {
  className?: string;
}

const Navbar = ({ className }: IProps) => {
  return (
    <nav className={className}>
      <Container className="flex max-w-[1440px] items-center justify-between xl:px-7">
        <MenuButton className="-translate-x-3 xl:hidden xl:translate-x-0" />
        <BrandLogo className="-translate-x-3 xl:translate-x-0" />
        <SearchForm className="flex-1 md:mx-4" />
        <NavMenu className="hidden xl:flex" />
        <MobileNavMenu className="xl:hidden" />
        <MenuUtils className="xl:ml-auto" />
      </Container>
    </nav>
  );
};

export default Navbar;
