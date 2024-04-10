import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";

const Home = () => {
  return (
    <div className="bg-ghost pt-5">
      <div className="container">
        <Hero />
        <WhyUs />
        <FlashSale/>
      </div>
    </div>
  );
};

export default Home;
