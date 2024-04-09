import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Headline from "../shared/Headline";

const MainLayout = () => {
  return (
    <>
      <Headline />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
