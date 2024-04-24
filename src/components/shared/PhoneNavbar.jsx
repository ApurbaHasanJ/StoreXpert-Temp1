import NavItems from "./NavItems";
import { HashLink as NavLink } from "react-router-hash-link";
import { GoHome } from "react-icons/go";
import { CiMenuBurger } from "react-icons/ci";

import { SlHandbag } from "react-icons/sl";

import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";

const navItems = [
  {
    item: "home",
    url: "/",
    icon: GoHome,
  },
  {
    item: "menu",
    url: "/#flash-sale",
    icon: CiMenuBurger,
  },
  {
    item: "call",
    url: "/#hot-product",
    icon: BsTelephone,
  },
  {
    item: "cart",
    url: "/cart",
    icon: SlHandbag,
  },
];

export const PhoneNavItems = () => {
  return (
    <>
      {navItems.map((nav, index) => (
        <NavLink
          key={index}
          to={nav?.url}
          smooth
          className="nav-item flex flex-col items-center capitalize">
          <nav.icon className="text-lg" /> <span>{nav?.item}</span>
        </NavLink>
      ))}
    </>
  );
};

const PhoneNavbar = () => {
  // direct call
  const handleCallClick = () => {
    const phoneNumber = "+8801884167824";
    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
    <section className="md:hidden sticky bottom-0 left-0 right-0 bg-primary py-4">
      <div className="container flex items-center justify-between text-white">
        {/* home */}
        <NavLink
          to="/"
          className="nav-item flex flex-col gap-1 items-center capitalize">
          <GoHome className="text-lg" />
          <span className="text-xs">home</span>
        </NavLink>
        {/* menu */}
        <div className="nav-item flex flex-col gap-1 items-center capitalize">
          <CiMenuBurger className="text-lg" />
          <span className="text-xs">menu</span>
        </div>
        {/* call */}
        <div
          onClick={handleCallClick}
          className="nav-item flex flex-col gap-1 items-center capitalize">
          <BsTelephone className="text-lg" />
          <span className="text-xs">call</span>
        </div>
        {/* cart */}
        <Link
          to="/cart"
          className="nav-item flex flex-col gap-1 items-center capitalize">
          <SlHandbag className="text-lg" />
          <span className="text-xs">cart</span>
        </Link>
      </div>
    </section>
  );
};

export default PhoneNavbar;
