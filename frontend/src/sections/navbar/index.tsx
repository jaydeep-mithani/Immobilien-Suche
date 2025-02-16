import Anchor from "@/components/anchor";
import Menu from "./menu";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Anchor href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap uppercase">
            Immobilien Suche
          </span>
        </Anchor>
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
