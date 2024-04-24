import { useEffect, useMemo, useState } from "react";
import ProductCards from "./ProductCards";
import { Button } from "../ui/button";
import products from "../../../public/products.json";

const RelatedProducts = ({ category }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const filteredProduct = products.filter(
      (product) => product?.category == category
    );
    setRelatedProducts(filteredProduct);
  }, [category]);

  // Memoize the sliced array of products based on the showAll state
  const displayedProducts = useMemo(() => {
    return showAll ? relatedProducts : relatedProducts.slice(0, 5);
  }, [relatedProducts, showAll]);

  return (
    <section className="bg-ghost/50 rounded-lg shadow mt-10 p-4">
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <h4>
          Related <span className="text-primary">Products</span>
        </h4>

        <Button
          disabled={products.length == 5 || showAll}
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

export default RelatedProducts;
