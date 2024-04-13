import { useEffect, useState } from "react";
import ProductCards from "./shared/ProductCards";
import { Button } from "./ui/button";

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

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
      <ProductCards products={products.slice(0, showAll ? 15 : 5)} />
    </section>
  );
};

export default NewArrivals;
