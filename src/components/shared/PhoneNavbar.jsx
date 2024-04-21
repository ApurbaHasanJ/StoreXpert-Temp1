import NavItems from "./NavItems";

const PhoneNavbar = () => {
  return (
    <section className="md:hidden sticky bottom-0 left-0 right-0 bg-primary py-4">
      <div className="container flex items-center justify-between text-white">
        <NavItems />
      </div>
    </section>
  );
};

export default PhoneNavbar;
