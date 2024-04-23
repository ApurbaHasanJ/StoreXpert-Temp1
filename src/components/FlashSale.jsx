import { useMemo } from "react";
import products from "../../public/products.json";
import { Button } from "./ui/button";
import ProductCards from "./shared/ProductCards";

const FlashSale = () => {
  // Memoize the products array to prevent unnecessary re-renders
  const memoizedProducts = useMemo(() => products.slice(0, 5), []);

  return (
    <section id="flash-sale" className="pt-5">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex flex-wrap items-center md:gap-6 gap-2">
            <h4>
              Flash <span className="text-primary">Sale</span>
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
