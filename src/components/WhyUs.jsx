import delivery from "/src/assets/service/delivery.png";
import returns from "/src/assets/service/return.png";
import discounts from "/src/assets/service/discounts.png";
import accuracy from "/src/assets/service/accuracy.png";

const benefits = [
  {
    _id: 1,
    option: "Cash on Delivery",
    img: delivery,
  },
  {
    _id: 2,
    option: "Free & Easy Returns",
    img: returns,
  },
  {
    _id: 3,
    option: "Best Price Guaranteed 100%",
    img: discounts,
  },
  {
    _id: 4,
    option: "Authentic Products",
    img: accuracy,
  },
];

const WhyUs = () => {
  return (
    <section className="bg-primary/20 rounded-lg px-4 py-3 flex flex-wrap items-center justify-between gap-4">
      {benefits?.map((benefit) => (
        <div key={benefit?._id} className="flex items-center gap-4">
          <img className="w-10 h-10" src={benefit?.img} alt="" />
          <span className="font-bold">{benefit?.option}</span>
        </div>
      ))}
    </section>
  );
};

export default WhyUs;
