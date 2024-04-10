import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ProductCard from "./shared/ProductCard";

const FlashSale = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <section className="bg-white rounded-lg shadow p-4">
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
      <ProductCard products={products.slice(0,5)} />
    </section>
  );
};

export default FlashSale;
