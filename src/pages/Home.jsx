import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import HotProduct from "@/components/HotProduct";
import NewArrivals from "@/components/NewArrivals";
import WhyUs from "@/components/WhyUs";

const Home = () => {
  return (
    <div className="bg-ghost pt-5">
      <div className="container">
        <Hero />
        <WhyUs />
        <FlashSale/>
        <HotProduct/>
        <NewArrivals/>
      </div>
    </div>
  );
};

export default Home;
