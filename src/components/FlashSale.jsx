import { useMemo } from "react";
import products from "../../public/products.json";
import { Button } from "./ui/button";
import ProductCards from "./shared/ProductCards";

import flash from "/src/assets/icons/flash.png";

const FlashSale = () => {
  // Memoize the products array to prevent unnecessary re-renders
  const memoizedProducts = useMemo(() => products.slice(0, 5), []);

  return (
    <section id="flash-sale" className="pt-5">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex flex-wrap items-center md:gap-6 gap-3">
            <h4 className="flex items-center">
              Flash <span className="text-primary">Sale</span>{" "}
              <img className="md:w-7 w-6 ml-2" src={flash} alt="" />
            </h4>

            <div>
              Ending in{"  "}
              <span className="bg-primary py-1 px-3 rounded-lg text-white">
                10h : 30m : 10s
              </span>
            </div>
          </div>
          <Button variant="outline" size="sm" className="">
            View All
          </Button>
        </div>
        <ProductCards products={memoizedProducts} />
      </div>
    </section>
  );
};

export default FlashSale;
