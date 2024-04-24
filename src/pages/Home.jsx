import AdvertiseCards from "@/components/AdvertiseCards";
import AllProducts from "@/components/AllProducts";
import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import HotProduct from "@/components/HotProduct";
import NewArrivals from "@/components/NewArrivals";
import WhyUs from "@/components/WhyUs";

const Home = () => {
  return (
    <div className="bg-ghost py-5">
      <div className="container">
        <Hero />
        <div className="max-sm:hidden">
        <WhyUs />
        </div>
        <FlashSale/>
        <HotProduct/>
        <NewArrivals/>
        <AdvertiseCards/>
        <AllProducts/>
        <div className="sm:hidden">
        <WhyUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
