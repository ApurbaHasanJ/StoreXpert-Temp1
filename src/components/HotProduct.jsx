import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { FaCartPlus } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

const HotProduct = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data[0]);
      });
  }, []);

  return (
    <section className="bg-white border border-primary/50 my-5 rounded-lg shadow p-4">
      <div className="border-b pb-4 mb-6">
        <h4>
          <span className="text-primary">HOT </span>Product Of This Week
        </h4>
      </div>
      {/* card content */}
      <div className="pb-4 flex max-md:flex-col md:items-center gap-3">
        <div className="max-w-xs relative w-full overflow-hidden rounded-xl">
          <img
            className="scale-100 hover:scale-105 duration-300"
            src={product?.images[0]}
            alt={product?.title}
          />
          <div className="absolute top-0 left-0 font-bold bg-primary text-ghost md:text-2xl text-lg p-3 rounded-full rounded-tl-none">
            <span>{product?.disc}%</span>
          </div>
        </div>
        {/* desc */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-primary font-bold md:text-3xl text-xl">
              ৳{" "}
              {product?.disc
                ? Math.floor(((100 - product?.disc) / 100) * product?.price)
                : product?.price}
            </span>
            <span
              className={`line-through text-lg text-secondary block ${
                product?.disc ? "block" : "hidden"
              }`}>
              Tk. {product?.price}
            </span>
          </div>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold">
            {product?.title}
          </p>
          <div className="flex items-center gap-4 my-4">
            <p className="text-secondary">4.5 Litre</p>
            <p
              className={`text-green-500 ${
                product?.inStock ? "block" : "hidden"
              }`}>
              In Stock
            </p>
          </div>
         
            <Progress value={33} />
         
          <div className="flex max-md:flex-col md:items-center gap-4 my-4">
            <div className="flex items-center gap-1 text-lg font-semibold">
              <span className="bg-ghost p-1 px-2">12</span>:
              <span className="bg-ghost p-1 px-2">22</span>:
              <span className="bg-ghost p-1 px-2">24</span>
            </div>
            <p className="text-secondary">
              Hurry up!! Buy before the offer ends.
            </p>
          </div>
          <Button
            size="lg"
            className={cn("flex justify-center items-center gap-2")}>
            <FaCartPlus /> <span>Order Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HotProduct;
