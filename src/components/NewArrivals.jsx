import { useEffect, useMemo, useState } from "react";
import ProductCards from "./shared/ProductCards";
import { Button } from "./ui/button";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log({data});
        setProducts(data);
      });
  }, []);

  // Memoize the sliced array of products based on the showAll state
  const displayedProducts = useMemo(() => {
    return showAll ? products.slice(0, 15) : products.slice(0, 5); // Show 15 products when showAll is true
  }, [products, showAll]);

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
