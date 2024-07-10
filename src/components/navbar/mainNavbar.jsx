import Menu from "./menu";
import Setting from "./parameter";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-evenly   flex-rows  bg-sky-100 p-0">
      <Menu />
      <Setting />
    </nav>
  );
};

export default Navbar;
