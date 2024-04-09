import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa6";

const categories = [
  {
    item: "Women & Girls Fashion",
  },
  {
    item: "Watch’s Bags & Jewellery",
  },
  {
    item: "Kid’s & Men’s Fashion",
  },
  {
    item: "Kitchen Products",
  },
  {
    item: "Household & Outdoor",
  },
  {
    item: "TC & Home Appliences",
  },
  {
    item: "Electronic Accessories",
  },
  {
    item: "Gadget & Accessories",
  },
];

const Categories = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2 h-full pr-6 overflow-y-scroll">
      {categories.map((category, index) => (
        <Link
          key={index}
          to="#"
          className="flex items-center gap-2 whitespace-nowrap mt-4 text-secondary hover:text-primary">
          <FaCaretRight /> <span>{category.item}</span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
