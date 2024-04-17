import { SlHandbag } from "react-icons/sl";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa6";
import { BsSearch, BsTelephone } from "react-icons/bs";
import NavItems from "./NavItems";
import { useState } from "react";
import Categories from "../Categories";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <header className="">
      <div className="container flex items-center justify-between gap-10 py-5">
        <h4 className="text-primary">WoWnex</h4>
        <form className="max-w-2xl w-full md:border-2 border border-primary rounded-3xl flex items-center pl-2">
          <input
            type="search"
            className="focus:outline-none w-full pl-3"
            name=""
            id=""
            placeholder="Search product here"
          />
          <Button className="md:px-8 px-6 md:text-lg text-xs rounded-l-none rounded-r-3xl">
            <BsSearch className="md:hidden text-white text-sm" />
            <span className="max-lg:hidden">Search</span>
          </Button>
        </form>
        {/* cart */}
        <Link to="/cart" className="relative">
          <SlHandbag className="text-secondary md:text-3xl text-2xl" />
          <span className="bg-primary text-sm rounded-full h-5 w-5 text-center text-white absolute -right-2 -bottom-2">
            0
          </span>
        </Link>
      </div>

      {/* 2nd column */}
      <div className="bg-primary text-white py-3">
        <div className="container w-full flex items-center gap-5 justify-between">
          <div
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-3">
            <h5>All Categories</h5>
            <FaSortDown />
          </div>
          <div className={cn("fixed duration-500 z-10 top-[198px]", showCategories? "left-0": "-left-[400px]")}>
            <Categories />
          </div>

          <div className="flex items-center lg:gap-10 gap-4 capitalize text-white">
            <div className="max-md:hidden flex items-center lg:gap-10 gap-4">
              <NavItems />
            </div>
            <div className="flex items-center lg:gap-2 gap-1">
              <BsTelephone className="lg:w-[22px] lg:h-[22px] hover:text-slate-300" />
              <div>
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
