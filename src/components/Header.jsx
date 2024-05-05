import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
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
        <Navbar />

        {/* buttons */}
        <div>buttons</div>
      </div>
    </header>
  );
};

export default Header;
