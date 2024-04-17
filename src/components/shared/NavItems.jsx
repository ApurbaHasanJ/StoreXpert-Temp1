import { NavHashLink } from "react-router-hash-link";
import { GoHome } from "react-icons/go";
import { IoFlashOutline } from "react-icons/io5";

import { SlFire } from "react-icons/sl";
import { CiShop } from "react-icons/ci";


const navItems = [
  {
    item: "home",
    url: "/",
    icon: GoHome,
  },
  {
    item: "flash sale",
    url: "/#flash-sale",
    icon: IoFlashOutline,
  },
  {
    item: "hot product",
    url: "/#hot-product",
    icon: SlFire,
  },
  {
    item: "shop",
    url: "/#shop",
    icon: CiShop,
  },
];

const NavItems = () => {
  return (
    <>
      {navItems.map((nav, index) => (
        <NavHashLink
          key={index}
          to={nav?.url}
          smooth
          className="nav-item flex flex-col items-center capitalize">
          <nav.icon className="md:hidden text-lg" /> <span>{nav?.item}</span>
        </NavHashLink>
      ))}
    </>
  );
};

export default NavItems;
