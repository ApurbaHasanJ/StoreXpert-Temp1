import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ProductCards from "./shared/ProductCards";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [viewProducts, setViewProducts] = useState(15);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <section id="shop" className="pt-5">
      <div className="bg-white rounded-lg shadow p-4">
        <h4 className="border-b pb-4 mb-6">
          All <span className="text-primary">Products</span>
        </h4>

        <ProductCards products={products.slice(0, viewProducts)} />

        <div className="text-center">
          <Button
            disabled={products.length <= viewProducts}
            onClick={() => setViewProducts(viewProducts + 15)}
            variant="outline"
            size="sm"
            className="mt-7 md:px-16 sm:px-8">
            LOAD MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
