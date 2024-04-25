import { cn } from "@/lib/utils";

const SearchResult = ({ product }) => {
  return (
    <>
      <img
        className="w-20 h-20 aspect-square rounded-md"
        src={product?.images[0]}
        alt={product?.title}
      />
      <div>
        <p className="my-2 capitalize">
          {product?.title.length > 40
            ? product?.title.substring(0, 40) + "..."
            : product?.title}
        </p>
        <div className="text-slate-800 flex justify-start items-center gap-2 text-base font-medium font-mono">
          <span className="text-primary font-bold md:text-xl text-lg">
            ৳{" "}
            {product?.disc
              ? Math.floor(((100 - product?.disc) / 100) * product?.price)
              : product?.price}
          </span>
          <span
            className={cn(
              "line-through text-secondary block",
              product?.disc ? "block" : "hidden"
            )}>
            ৳ {product?.price}
          </span>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
