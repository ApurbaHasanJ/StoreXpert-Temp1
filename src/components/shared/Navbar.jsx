import { SlHandbag } from "react-icons/sl";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { FaSortDown } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

// Home Flash Sale Hot Product Shop

const navItems = [
  {
    item: "home",
    url: "home",
  },
  {
    item: "flash sale",
    url: "flash-sale",
  },
  {
    item: "hot product",
    url: "hot-product",
  },
  {
    item: "shop",
    url: "shop",
  },
];

const Navbar = () => {
  return (
    <header className="">
      <div className="container flex items-center justify-between gap-10 py-5">
        <h4 className="text-primary">WoWnex</h4>
        <form className="max-w-2xl w-full border-2 border-primary rounded-3xl flex items-center pl-2">
          <input
            type="search"
            className="focus:outline-none w-full pl-3"
            name=""
            id=""
            placeholder="Search product here"
          />
          <Button className="md:px-8 rounded-l-none rounded-r-3xl text-lg">
            Search
          </Button>
        </form>
        {/* cart */}
        <div className="relative">
          <SlHandbag className="text-secondary md:text-3xl text-2xl" />
          <span className="bg-primary text-sm rounded-full h-5 w-5 text-center text-white absolute -right-2 -bottom-2">
            0
          </span>
        </div>
      </div>

      {/* 2nd column */}
      <div className="bg-primary text-white py-3">
        <div className="container w-full flex items-center gap-5 justify-between">
          <div className="flex items-center gap-3">
            <h5>All Categories</h5>
            <FaSortDown />
          </div>

          <div className="flex items-center gap-10 capitalize text-white">
            {navItems.map((nav, index) => (
              <NavLink key={index} to={nav?.url} className="nav-item">
                {nav?.item}
              </NavLink>
            ))}
            <div className="flex items-center gap-2">
              <BsTelephone className="w-[22px] h-[22px] hover:text-slate-300" />
              <div >
                Hotline:<span className="nav-item ml-2">+880 1800 6000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
