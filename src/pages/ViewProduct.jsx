import ProductDesc from "@/components/shared/ProductDesc";
import ServiceDesc from "@/components/shared/ServiceDesc";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import RelatedProducts from "@/components/shared/RelatedProducts";

const ViewProduct = () => {
  const param = useParams();
  const [products, setProducts] = useState([]);
  const [viewImg, setViewImg] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  // get actual product
  const product = products.find((product) => product._id == param.id);

  const handleViewImg = (img) => {
    setViewImg(img);
  };

  console.log(product);
  return (
    <section className="container mt-8 mb-16">
      <div className="flex max-md:flex-col items-start gap-6 mb-16">
        <div className="max-w-md w-full">
          <div className=" bg-ghost border relative rounded-xl">
            <img
              className="rounded-xl w-full h-full aspect-square"
              src={viewImg ? viewImg : product?.images[0]}
              alt={product?.title}
            />
            <span
              className={cn(
                "bg-primary border border-ghost/80 text-ghost absolute top-0 left-0 rounded-br-xl rounded-tl-xl px-2 font-medium text-sm",
                product?.disc ? "block" : "hidden"
              )}>
              {product?.disc}&#37;
            </span>
          </div>
          <Carousel>
            <CarouselContent className="flex ml-0 items-center gap-3 mt-2">
              {product?.images.map((img, i) => (
                <CarouselItem
                  key={i}
                  onClick={() => handleViewImg(img)}
                  className={cn(
                    "border-2 basis-auto border-secondary/20 p-0 w-28 h-28 bg-ghost/60 rounded-lg",
                    viewImg == img ? "border-primary/40" : "border-secondary/20"
                  )}>
                  <Card>
                    <CardContent>
                      <img src={img} alt="" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        {/* desc */}
        <div className="flex flex-col w-full">
          <div>
            <p className="md:text-3xl text-2xl capitalize">{product?.title}</p>
            <p
              className={cn(
                "text-lg mt-2",
                product?.inStock ? "text-green-500" : "text-red-500"
              )}>
              {product?.inStock ? "In Stock" : "Sold Out"}
            </p>
          </div>
          <div className="flex max-lg:flex-col justify-between gap-8">
            <div className="w-full">
              <div className="flex items-baseline gap-3 mb-4 mt-8">
                <span className="text-primary font-bold md:text-3xl text-xl">
                  <span className="text-3xl">৳</span>{" "}
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
              <Button
                size="lg"
                className="w-full text-xl py-2 mt-7 rounded-full">
                Order Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex mt-4 justify-center items-center gap-2 w-full text-xl py-2 rounded-full">
                <FaCartPlus /> <span>Add to Cart</span>
              </Button>

              <div className="mt-14 px-7 py-3 text-center border-2 border-secondary/40 border-dashed text-secondary/80 rounded-lg">
                <p>এই পণ্য সম্পর্কে জানতে আমাদের কল করুনঃ</p>
                <div className="flex items-center justify-center gap-2 text-3xl">
                  <IoCallOutline /> <span>01710-696950</span>
                </div>
              </div>
              <div className="mt-5 px-7 py-3 text-center border-2 border-secondary/40 border-dashed text-secondary/80 rounded-lg">
                <p>WhatsApp করুনঃ</p>
                <div className="flex items-center justify-center gap-2 text-3xl">
                  <BsWhatsapp /> <span>01710-696950</span>
                </div>
              </div>
            </div>
            <ServiceDesc />
          </div>
        </div>
      </div>
      <ProductDesc product={product} />
      <RelatedProducts category={product?.category} />
    </section>
  );
};

export default ViewProduct;
