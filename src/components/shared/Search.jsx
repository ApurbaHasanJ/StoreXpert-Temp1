import { useState } from "react";
import products from "../../../public/products.json";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { BsSearch } from "react-icons/bs";
import { cn } from "@/lib/utils";
import SearchResult from "./SearchResult";

const Search = ({scroll}) => {
  const [query, setQuery] = useState("");

  // filtering searched products
  const searchedProduct = products?.filter((product) =>
    query.toLocaleLowerCase() === ""
      ? ""
      : product.inStock > 0 &&
        product.title?.toLocaleLowerCase().includes(query)
  );

  return (
    <>
      <form className="max-w-2xl w-full mx-auto md:border-2 border border-primary md:rounded-3xl max-md:rounded-md flex items-center pl-2">
        <input
          type="search"
          className="focus:outline-none w-full pl-3"
          name=""
          id=""
          onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
          placeholder="Search product here"
        />
        <Link
          to={`/products/${searchedProduct[0]?._id}`}
          onClick={() => setQuery("")}
          className={cn(
            buttonVariants(),
            "md:px-8 bg-primary px-4 md:text-lg text-xs rounded-l-none md:rounded-r-3xl"
          )}>
          <BsSearch className="lg:hidden text-white text-sm" />
          <span className="max-lg:hidden">Search</span>
        </Link>
      </form>
      <div
        className={cn(
          "container pt-5 bg-ghost rounded-b-lg shadow-md z-10 absolute pb-4 md:top-[83px] right-0 left-0 min-h-[450px] max-h-[500px] h-full overflow-y-scroll",
          scroll ? "top-[65.5px]" : "top-14",
          !query && "hidden",
          searchedProduct?.length && "grid md:grid-cols-2 grid-cols-1 gap-2 content-start"
        )}>
        {searchedProduct.length ? (
          searchedProduct?.map((product) => (
            <Link
              key={product?._id}
              to={`/products/${product?._id}`}
              onClick={() => setQuery("")}
              className="flex items-center md:gap-6 gap-3 h-fit hover:bg-primary/10 rounded-md p-2">
              <SearchResult product={product} />
            </Link>
          ))
        ) : (
          <p className="text-center mt-10 text-primary font-medium">
            No products found
          </p>
        )}
      </div>
    </>
  );
};

export default Search;
