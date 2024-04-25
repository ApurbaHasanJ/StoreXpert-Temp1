import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const ProductViewImg = ({ setViewImg, viewImg, product }) => {
  return (
    <div className="max-w-[430px] md:max-h-[430px] md:h-full h-fit w-full">
      {/* display selected img */}
      <div className=" bg-ghost border relative rounded-xl overflow-hidden">
        <img
          className="max-w-[430px] max-h-[430px] h-full w-full aspect-square"
          src={viewImg}
          alt={product?.title}
        />
        <span
          className={cn(
            "bg-primary text-ghost absolute top-0 left-0 rounded-br-xl rounded-tl-xl px-2 font-medium text-sm",
            product?.disc ? "block" : "hidden"
          )}>
          {product?.disc}&#37;
        </span>
      </div>
      {/* all images for view images */}
      <Carousel>
        <CarouselContent className="flex ml-0 items-center gap-3 mt-2">
          {product?.images.map((img, i) => (
            <CarouselItem
              key={i}
              onClick={() => setViewImg(img)}
              className={cn(
                "border-2 basis-auto border-secondary/20 p-0 w-20 h-20 bg-ghost/60 rounded-lg overflow-hidden",
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
  );
};

export default ProductViewImg;
