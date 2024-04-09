import Categories from "./Categories";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import hero1 from "/src/assets/hero/hero1.jpg";
import hero2 from "/src/assets/hero/hero2.jpg";
import hero3 from "/src/assets/hero/hero3.jpg";

const heros = [
  {
    _id: 1,
    img: hero1,
  },
  {
    _id: 2,
    img: hero2,
  },
  {
    _id: 3,
    img: hero3,
  },
];

const Hero = () => {
  return (
    <div className="container max-h-[468.5px] flex gap-5">
      <div className="max-lg:hidden">
        <Categories />
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {heros.map((hero) => (
            <CarouselItem key={hero?._id}>
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img
                    className="w-full h-auto object-cover rounded-lg"
                    src={hero?.img}
                    alt=""
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
