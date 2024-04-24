import { FaCartPlus } from "react-icons/fa6";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart";

const ProductCards = ({ products }) => {
  const dispatch = useDispatch();

  // dispatch cart events
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 md:gap-5 gap-3 gap-y-8">
      {products?.map((product) => (
        <div key={product?._id}>
          <Link to={`/products/${product?._id}`}>
            <div className="overflow-hidden bg-ghost rounded-xl relative">
              <img
                className="rounded-xl h-full w-full scale-100 hover:scale-105 duration-300 aspect-square"
                src={product?.images[0]}
                alt={product?.title}
              />
              <span
                className={cn(
                  "bg-primary text-ghost absolute top-0 left-0 rounded-br-xl px-2 font-medium text-sm",
                  product?.disc ? "block" : "hidden"
                )}>
                {product?.disc}&#37;
              </span>
            </div>

            <p className="text-sm hover:text-primary hover:underline font-semibold mt-2 mb-1 lg:h-10 md:h-14 h-11">
              {product?.title.length > 45
                ? product?.title.substring(0, 45) + "..."
                : product?.title}
            </p>
          </Link>
          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-primary font-bold md:text-2xl text-lg">
              <span className="md:text-4xl text-xl">৳</span>{" "}
              {product?.disc
                ? Math.floor(((100 - product?.disc) / 100) * product?.price)
                : product?.price}
            </span>
            <span
              className={cn(
                "line-through text-secondary block",
                product?.disc ? "block" : "hidden"
              )}>
              ৳ {product?.price}
            </span>
          </div>

          <Link
            to="/checkout"
            onClick={() => handleAddToCart(product)}
            className={cn(
              buttonVariants({ size: "lg" }),
              "flex justify-center items-center gap-2 w-full"
            )}>
            <FaCartPlus /> <span>Order Now</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
