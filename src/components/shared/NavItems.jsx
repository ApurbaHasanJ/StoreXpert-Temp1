import { HashLink as NavLink } from "react-router-hash-link";


const navItems = [
  {
    item: "home",
    url: "/",
  },
  {
    item: "flash sale",
    url: "/#flash-sale",
  },
  {
    item: "hot product",
    url: "/#hot-product",
  },
  {
    item: "shop",
    url: "/#shop",
  },
];

const NavItems = () => {
  return (
    <>
      {navItems.map((nav, index) => (
        <NavLink
          key={index}
          to={nav?.url}
          smooth
          className="nav-item capitalize">
          {nav?.item}
        </NavLink>
      ))}
    </>
  );
};

export default NavItems;
