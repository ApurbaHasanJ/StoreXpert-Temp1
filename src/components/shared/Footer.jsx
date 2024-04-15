import { IoCallOutline } from "react-icons/io5";
import whatsAppImg from "/src/assets/icons/whatsapp.png";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { title: "Terms & Conditions", url: "terms-and-conditions" },
  { title: "Return & Refund Policy", url: "return-and-refund-policy" },
  { title: "After-Sale Support", url: "after-sale-support" },
  { title: "Replacement Warranty", url: "replacement warranty" },
  { title: "Privacy Policy", url: "privacy-policy" },
  { title: "Shipping or Delivery", url: "shipping-or-delivery" },
];
const Footer = () => {
  const location = useLocation();
  const year = new Date().getFullYear();

  const handleCallClick = () => {
    // Replace '1234567890' with the actual phone number you want to call
    const phoneNumber = "+8801884167824";

    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;

    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
    <footer>
      <div className="text-4xl font-bold bg-white container">
        <div
          className={cn(
            "flex items-center max-md:flex-col justify-center md:gap-10 gap-5 py-10",
            location?.pathname === "/"
              ? "bg-white"
              : "bg-ghost w-full rounded-xl mb-8"
          )}>
          <div onClick={handleCallClick} className="flex items-center gap-3">
            <IoCallOutline className="text-primary" /> Call Us
          </div>
          <a
            href="https://wa.me/+8801886084422?text=Hello! I Need Fashion Advice and Assistance."
            target="_blank"
            rel="noopener noreferrer">
            <div className="flex items-center gap-3">
              <img className="w-9" src={whatsAppImg} alt="" /> Chat on WhatsApp
            </div>
          </a>
        </div>
      </div>

      <div className=" bg-ghost">
        <div className="container py-10 font-medium flex max-md:flex-col justify-between lg:gap-20 gap-10">
          {/* col 1 */}
          <div className="md:w-4/12">
            <h3 className="text-primary">WoWnex</h3>
            <p className="mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              odio est perspiciatis commodi ab consectetur doloremque dicta
              distinctio quis voluptas impedit, illo id, asperiores fugiat et
              tenetur ex nostrum neque.
            </p>
          </div>

          {/* col 2 */}
          <div className="lg:w-2/12 ">
            <h5>Information</h5>
            <div className="flex flex-col gap-1 mt-7">
              {links?.map((link, index) => (
                <Link key={index} to={link?.url} className="hover:underline">
                  {link?.title}
                </Link>
              ))}
            </div>
          </div>

          {/* col 3 */}
          <div className="md:w-3/12">
            <h5>Contact Us</h5>
            <div className="mt-7">
              <p>Call us 10am-11pm (Everyday)</p>
              <p className="font-semibold">+8801710-696950</p>
              <p className="font-semibold">info@wownex.com</p>
              <p>
                G3, Ground Floor, House# 307, Elephant Road, Pubali Bank
                Building, Dhaka-1205.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-secondary/80 text-ghost">
          <div className="container flex max-sm:flex-col justify-between p-6">
            <p>
              Copyright &copy; {year}{" "}
              <span className="font-semibold">WoWnex</span> - All Rights
              Reserved
            </p>
            <p className="max-sm:mt-4">
              Developed by{" "}
              <Link
                target="blank"
                to="https://apurbahasanj.netlify.app"
                className="hover:text-primary hover:underline font-semibold">
                VRTX-Forge
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
