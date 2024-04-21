import { SlHandbag } from "react-icons/sl";
import { buttonVariants } from "../ui/button";
import products from "/src/products.json";
import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa6";
import { BsSearch, BsTelephone } from "react-icons/bs";
import NavItems from "./NavItems";
import { useState } from "react";
import Categories from "../Categories";
import { cn } from "@/lib/utils";
import useCarts from "../hooks/useCarts";
import SearchResult from "./SearchResult";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const { carts } = useCarts();
  const [showCategories, setShowCategories] = useState(false);

  // const totalQuantity = carts.reduce(
  //   (total, cartItem) => total + cartItem.quantity,
  //   0
  // );

  const searchedProduct = products?.filter((product) =>
    query.toLocaleLowerCase() === ""
      ? ""
      : product.inStock > 0 &&
        product.title?.toLocaleLowerCase().includes(query)
  );

  console.log({ searchedProduct });

  return (
    <header className="relative">
      <div className="container flex items-center justify-between gap-10 py-5">
        <h4 className="text-primary">WoWnex</h4>
        <form className="max-w-2xl w-full md:border-2 border border-primary rounded-3xl flex items-center pl-2">
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
              "md:px-8 bg-primary px-6 md:text-lg text-xs rounded-l-none rounded-r-3xl"
            )}>
            <BsSearch className="md:hidden text-white text-sm" />
            <span className="max-lg:hidden">Search</span>
          </Link>
        </form>
        {/* cart */}
        <Link to="/cart" className="relative">
          <SlHandbag className="text-secondary md:text-3xl text-2xl" />
          <span className="bg-primary text-sm rounded-full h-5 w-5 text-center text-white absolute -right-2 -bottom-2">
            {carts.length}
          </span>
        </Link>
      </div>

      <div
        className={cn(
          "container pt-5 bg-ghost rounded-b-lg shadow-md z-10 absolute top-[83px] right-0 left-0 min-h-[450px] max-h-[500px] h-full overflow-y-scroll",
          !query && "hidden",
          searchedProduct?.length && "grid md:grid-cols-2 grid-cols-1 gap-2"
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

      {/* 2nd column */}
      <div className="bg-primary text-white py-3">
        <div className="container w-full flex items-center gap-5 justify-between">
          <div
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-3">
            <h5>All Categories</h5>
            <FaSortDown />
          </div>
          <div
            className={cn(
              "lg:hidden fixed duration-500 z-10 md:top-[185px] top-[178px]",
              showCategories ? "left-0" : "-left-[400px]"
            )}>
            <Categories />
          </div>

          <div className="flex items-center lg:gap-10 gap-4 capitalize text-white">
            <div className="max-md:hidden flex items-center lg:gap-10 gap-4">
              <NavItems />
            </div>
            <div className="flex items-center lg:gap-2 gap-1">
              <BsTelephone className="lg:w-[22px] lg:h-[22px] hover:text-slate-300" />
              <div>
                Hotline:<span className="nav-item ml-2">+880 1800 6000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
