import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import NavItems from "./NavItems";
import { useEffect, useState } from "react";
import Categories from "../Categories";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import Search from "./Search";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [scroll, setScroll] = useState(false);

  // cart quantity
  const selectedItem = useSelector((state) => state?.cart?.selectedItem);

  // Add an event listener to track scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative">
      <div
        className={cn(
          "left-0 right-0 top-0 bg-white z-10 shadow-sm duration-500 transition-all ease-in-out",
          scroll ? "fixed" : "sticky"
        )}>
        <div className="container flex items-center justify-between gap-10 py-5">
          <h4 className="text-primary">WoWnex</h4>
          <div className="max-md:hidden max-w-2xl w-full">
            <Search />
          </div>
          {/* cart */}
          <Link to="/cart" className="relative">
            <SlHandbag className="text-secondary md:text-3xl text-2xl" />
            <span className="bg-primary text-sm rounded-full h-5 w-5 text-center text-white absolute -right-2 -bottom-2">
              {selectedItem}
            </span>
          </Link>
        </div>
        <div className="md:hidden container z-10 pb-3">
          <Search />
        </div>
      </div>

      {/* 2nd column */}
      <div className="bg-primary text-white py-3 max-md:hidden">
        <div className="container w-full flex items-center gap-5 justify-between">
          <div
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-3">
            <h5>All Categories</h5>
            <FaSortDown />
          </div>
          <div
            className={cn(
              "lg:hidden fixed duration-500 z-10 md:top-[185px] top-[178px]",
              showCategories ? "left-0" : "-left-[400px]"
            )}>
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
