import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Headline from "../shared/Headline";
import PhoneNavbar from "../shared/PhoneNavbar";

const MainLayout = () => {
  return (
    <>
      <Headline />
      <Navbar />
      <Outlet />
      <Footer />
      <PhoneNavbar/>
    </>
  );
};

export default MainLayout;
