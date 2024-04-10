import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";

const Home = () => {
  return (
    <div className="bg-ghost">
      <div className="container">
        <Hero />
        <WhyUs />
      </div>
    </div>
  );
};

export default Home;
