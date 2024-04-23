import { useMemo, useState } from "react";
import products from "../../public/products.json";
import ProductCards from "./shared/ProductCards";
import { Button } from "./ui/button";

const NewArrivals = () => {
  const [showAll, setShowAll] = useState(false);

  // Memoize the sliced array of products based on the showAll state
  const displayedProducts = useMemo(() => {
    return showAll ? products.slice(0, 15) : products.slice(0, 5);
  }, [showAll]);

  // console.log({products})

  return (
    <section className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h4>
          New <span className="text-primary">Arrivals</span>
        </h4>

        <Button
          disabled={showAll}
          onClick={() => setShowAll(!showAll)}
          variant="outline"
          size="sm"
          className="">
          View All
        </Button>
      </div>
      <ProductCards products={displayedProducts} />
    </section>
  );
};

export default NewArrivals;
