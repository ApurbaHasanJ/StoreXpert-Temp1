import { HashLink as NavLink } from "react-router-hash-link";
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { SlHandbag } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Categories from "../Categories";
import { cn } from "@/lib/utils";

const PhoneNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // direct call
  const handleCallClick = () => {
    const phoneNumber = "+8801884167824";
    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
    <>
      <section className="md:hidden sticky bottom-0 left-0 right-0 z-20 bg-primary py-4 px-5">
        <div className="container flex items-center justify-between text-white">
          {/* home */}
          <NavLink
            to="/"
            className="flex flex-col gap-1 items-center capitalize w-fit">
            <GoHome className="text-lg" />
            <span className="text-xs">home</span>
          </NavLink>
          {/* menu */}
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="flex flex-col gap-1 items-center capitalize w-fit">
            <RxDashboard className="text-lg" />
            <span className="text-xs">menu</span>
          </div>
          {/* call */}
          <div
            onClick={handleCallClick}
            className="flex flex-col gap-1 items-center capitalize w-fit">
            <BsTelephone className="text-lg" />
            <span className="text-xs">call</span>
          </div>
          {/* cart */}
          <Link
            to="/cart"
            className="flex flex-col gap-1 items-center capitalize w-fit">
            <SlHandbag className="text-lg" />
            <span className="text-xs">cart</span>
          </Link>
        </div>
      </section>
      {/* show menu */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(!showMenu)}
          className={cn("fixed transition-transform duration-1000 bg-gray-500/50 top-0 bottom-0 z-10", showMenu ? "left-0 right-0": "-left-[1000px]")}>
          <div className="h-full w-fit">
            <Categories />
          </div>
        </div>
      )}
    </>
  );
};

export default PhoneNavbar;
