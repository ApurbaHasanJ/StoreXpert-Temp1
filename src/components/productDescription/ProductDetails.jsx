import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart";
import { RxDotFilled } from "react-icons/rx";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { FaCartPlus } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import ServiceDesc from "../shared/ServiceDesc";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  // dispatch cart events
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // direct call
  const handleCallClick = () => {
    const phoneNumber = "+8801884167824";
    // Create a tel URL with the phone number
    const telUrl = `tel:${phoneNumber}`;
    // Open the phone app with the provided phone number
    window.location.href = telUrl;
  };

  return (
    <div className="flex flex-col w-full">
      {/* product name and stock availability */}
      <div>
        <p className="md:text-3xl text-2xl capitalize">{product?.title}</p>
        <p
          className={cn(
            "text-lg mt-2 font-medium uppercase",
            product?.inStock ? "text-green-500" : "text-red-500"
          )}>
          {product?.inStock ? "In Stock" : "Sold Out"}
        </p>
      </div>
      {/* product price, discount, order now, add to cart */}
      <div className="flex max-lg:flex-col justify-between lg:gap-8 gap-14">
        <div className="w-full h-fit">
          <div className="flex items-center justify-between gap-3 my-5">
            <div className="flex items-baseline gap-3">
              <p className="text-primary font-bold md:text-3xl text-xl">
                <span className="md:text-xl text-base font-extrabold">৳</span>{" "}
                {product?.disc
                  ? Math.floor(product.price * (1 - product.disc / 100))
                  : product?.price}
              </p>
              <s
                className={cn(
                  "text-secondary block",
                  product?.disc ? "block" : "hidden"
                )}>
                ৳ {product?.price}
              </s>
            </div>
            {/* discounted amount */}
            <div
              className={cn(
                "disc-box text-white bg-[#fcb800fc] rounded-md font-bold text-sm px-3 flex gap-1 items-center",
                !product?.disc && "hidden"
              )}>
              <RxDotFilled className="text-xl" />{" "}
              <small className="text-base font-extrabold bold">৳</small>
              {product?.disc &&
                product.price -
                  Math.floor(product.price * (1 - product.disc / 100))}
              <span>OFF</span>
            </div>
          </div>
          {/* order and add to cart btn */}
          <Link
            to="/checkout"
            onClick={() => handleAddToCart(product)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full text-xl mt-1 py-[10px] rounded-full"
            )}>
            Order Now
          </Link>
          <Button
            onClick={() => handleAddToCart(product)}
            size="lg"
            variant="outline"
            className="flex mt-4 justify-center items-center gap-2 w-full text-xl py-2 rounded-full">
            <FaCartPlus /> <span>Add to Cart</span>
          </Button>

          {/* contact info- direct call and whatsapp msg */}
          <div
            onClick={handleCallClick}
            className="mt-14 px-7 py-3 text-center border-2 border-secondary/40 border-dashed text-secondary/80 rounded-lg">
            <p>এই পণ্য সম্পর্কে জানতে আমাদের কল করুনঃ</p>
            <div className="flex items-center justify-center gap-2 text-3xl">
              <IoCallOutline /> <span>01710-696950</span>
            </div>
          </div>

          {/* whatsapp */}
          <a
            href="https://wa.me/+8801886084422?text=Hello! I Need Fashion Advice and Assistance."
            target="_blank"
            rel="noopener noreferrer">
            <div className="mt-5 px-7 py-3 text-center border-2 border-secondary/40 border-dashed text-secondary/80 rounded-lg">
              <p>WhatsApp করুনঃ</p>
              <div className="flex items-center justify-center gap-2 text-3xl">
                <BsWhatsapp /> <span>01710-696950</span>
              </div>
            </div>
          </a>
        </div>
        {/* services providing- delivery, customer service, cash on delivery etc */}
        <ServiceDesc />
      </div>
    </div>
  );
};

export default ProductDetails;
