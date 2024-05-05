import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleManu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white rin-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3 max-xs:px-2 ">
        {/* logo */}
        <div>
          <Link>
            <img src={logo} height={66} width={66} alt="" />
          </Link>
        </div>

        {/* navbar */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15 "}
        />
        {/* navbar mobile */}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />

        {/* buttons */}
        <div >
          {!menuOpened ? (
            <MdMenu className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/39 h-8 w-8 rounded-full" onClick={toggleManu}/>
          ) : (
            <MdClose className="md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/39 h-8 w-8 rounded-full" onClick={toggleManu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
