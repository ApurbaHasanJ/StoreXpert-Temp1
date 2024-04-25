import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import whatsAppImg from "/src/assets/icons/whatsapp.png";
import { Link } from "react-router-dom";
import facebookImg from "/src/assets/icons/facebook.png";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const links = [
  { title: "Terms & Conditions", url: "/terms-and-conditions" },
  { title: "Return & Refund Policy", url: "/return-and-refund-policy" },
  { title: "After-Sale Support", url: "/after-sale-support" },
  { title: "Replacement Warranty", url: "/replacement-warranty" },
  { title: "Privacy Policy", url: "/privacy-policy" },
  { title: "Shipping or Delivery", url: "/shipping-or-delivery" },
];
const Footer = () => {
  const year = new Date().getFullYear();

  const handleCallClick = () => {
    const phoneNumber = "+8801884167824";
    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
    <footer>
      <div className="bg-white pt-8 container">
        <div className="flex items-center justify-between max-sm:flex-col -mb-14 px-6 drop-shadow-md bg-ghost rounded-2xl md:w-2/3 mx-auto md:gap-10 gap-5 py-10">
          <div className="flex items-center gap-3">
            <img src={facebookImg} className="w-12" alt="" />
            <div>
              <p className="font-medium">Visit Our Facebook</p>
              <p>To get update about our latest update</p>
            </div>
          </div>
          <Link
            to="https://apurbahasanj.netlify.app"
            className={cn(buttonVariants({ variant: "outline" }))}>
            Visit Now
          </Link>
        </div>
      </div>

      <div className="z-0 bg-ghost">
        <div className="container py-10 pt-20 font-medium flex max-md:flex-col justify-between lg:gap-20 gap-10">
          {/* col 1 */}
          <div className="md:w-4/12">
            <h3 className="text-primary">WoWnex</h3>
            <p className="mt-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              odio est perspiciatis commodi ab consectetur doloremque dicta
              distinctio quis voluptas impedit, illo id, asperiores fugiat et
              tenetur ex nostrum neque.
            </p>
            <a
              href="https://wa.me/+8801886084422?text=Hello! I Need Assistance."
              target="_blank"
              rel="noopener noreferrer">
              <img className="h-16 mt-3" src={whatsAppImg} alt="" />
            </a>
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
            <div className="mt-7 grid grid-cols-1 gap-1">
              <p>Call us 10am-11pm (Everyday)</p>
              <p onClick={handleCallClick} className="flex items-center gap-2">
                <IoCallOutline className="text-primary" />
                <span>+8801710-696950</span>
              </p>
              <p className="flex items-center gap-2">
                <AiOutlineMail className="text-primary" />
                <span>info@wownex.com</span>
              </p>
              <p className="flex gap-2">
                <IoLocationOutline className="text-primary text-2xl md:w-9" />
                <span>
                  G3, Ground Floor, House# 307, Elephant Road, Pubali Bank
                  Building, Dhaka-1205.
                </span>
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
                target="_blank"
                to="https://apurbahasanj.netlify.app"
                className="hover:text-primary/80 hover:underline font-semibold">
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
