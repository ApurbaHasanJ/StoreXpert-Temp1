// import discImg1 from "/src/assets/others/disc-hero.jpg";
import discImg2 from "/src/assets/others/disc-hero1.jpg";
import discImg3 from "/src/assets/others/disc-hero2.jpg";

const AdvertiseCards = () => {
  return (
    <section className="grid grid-cols-2 md:gap-4 gap-2 my-5">
      <img className=" rounded-lg" src={discImg2} alt="" />
      <img className=" rounded-lg" src={discImg3} alt="" />
    </section>
  );
};

export default AdvertiseCards;
