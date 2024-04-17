import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const products = [
  {
    title:
      "Multi-Function Professional Blender, Pro Grade, Best 2.5 liters Container, 6000W",
    img: "https://res.cloudinary.com/dxixdugif/image/upload/v1712761622/Products/glasses/sunglass6_misy7o.jpg",
    quantity: 2,
    price: 600,
  },
  {
    title:
      "Multi-Function Professional Blender, Pro Grade, Best 2.5 liters Container, 6000W",
    img: "https://res.cloudinary.com/dxixdugif/image/upload/v1712761622/Products/glasses/sunglass6_misy7o.jpg",
    quantity: 2,
    price: 600,
  },
  {
    title:
      "Multi-Function Professional Blender, Pro Grade, Best 2.5 liters Container, 6000W",
    img: "https://res.cloudinary.com/dxixdugif/image/upload/v1712761622/Products/glasses/sunglass6_misy7o.jpg",
    quantity: 2,
    price: 600,
  },
];

export const Stars = () => {
  return (
    <div className="flex items-center gap-2 text-yellow-500">
      {Array.from({ length: 3 }).map((_, index) => (
        <BsStarFill key={index} />
      ))}
    </div>
  );
};

const Cart = () => {
  const location = useLocation();
  return (
    <section
      className={cn(location?.pathname === "/cart" ? "mt-8 mb-16 container" : "")}>
      <div className="bg-white border-t border-ghost shadow-md rounded-xl md:p-5 p-2">
        <p className="text-center bg-ghost text-secondary md:text-2xl text-xl font-semibold rounded-md p-3">
          আপনার অর্ডার
        </p>
        <div className="mt-5 border border-secondary/30 rounded-lg">
          <Table className="">
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Product</TableHead>
                <TableHead className="text-center border-x">Quantity</TableHead>
                <TableHead className="text-center">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((product, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium flex items-center gap-3">
                    <div>
                      <MdDeleteForever className="text-xl md:text-2xl text-red-600" />
                    </div>
                    <img
                      className="w-20 aspect-square bg-ghost rounded-lg"
                      src={product?.img}
                      alt={"item" + i + 1}
                    />
                    <p className="max-sm:text-xs">{product?.title}</p>
                  </TableCell>
                  <TableCell className="border-x">
                    <div className="flex items-center justify-center gap-3 font-medium text-secondary">
                      <FaMinus className="bg-secondary/40 hover:text-primary w-5 h-5 p-1 rounded" />
                      {product?.quantity}
                      <FaPlus className="bg-secondary/40 hover:text-primary w-5 h-5 p-1 rounded" />
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-medium text-secondary">
                    Tk. {product?.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="text-center mt-10">
          <div className="mt-5 px-7 py-3 border-2 border-secondary/40 border-dashed text-secondary/80 rounded-lg">
            <p className="md:text-xl font-medium">
              এই পণ্য সম্পর্কে জানতে আমাদের কল করুনঃ
            </p>
            <div className="flex items-center justify-center gap-2 text-3xl">
              <IoCallOutline /> <span>01710-696950</span>
            </div>
          </div>
          <div className="flex items-baseline justify-center gap-3">
            <Stars />
            <p className="mt-3 text-secondary">
              অর্ডার কনফার্ম এর ৪৮-৭২ ঘন্টার মধ্যে ক্যাশ অন ডেলিভারি
            </p>
            <Stars />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
