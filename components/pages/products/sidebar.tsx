import CallToAction from "@/components/pages/products/call-to-action";
import Checklist from "@/components/pages/products/checklist";
import Trailers from "@/components/pages/products/trailers";

const Sidebar = () => {
  return (
    <aside>
      <Trailers />
      <CallToAction />
      <Checklist />
    </aside>
  );
};

export default Sidebar;
