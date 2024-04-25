import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../public/products.json";
import RelatedProducts from "@/components/shared/RelatedProducts";
import ProductDesc from "@/components/productDescription/ProductDesc";
import ProductDetails from "@/components/productDescription/ProductDetails";
import PhoneProductDesc from "@/components/productDescription/PhoneProductDesc";
import ProductViewImg from "@/components/productDescription/ProductViewImg";

const ViewProduct = () => {
  const param = useParams();
  const [product, setProduct] = useState();
  const [viewImg, setViewImg] = useState("");

  // setting default view img
  useEffect(() => {
    window.scrollTo({ top: 0 });
    setProduct(products?.find((product) => product._id == param.id));
    setViewImg(product?.images[0]);
  }, [param.id, product?.images]);

  return (
    <section className="container mt-8 my-8">

      {/* about product */}
      <div className="flex max-md:flex-col items-start gap-6 mb-10 md:mb-16">
        {/* product view IMG */}
        <ProductViewImg
          product={product}
          viewImg={viewImg}
          setViewImg={setViewImg}
        />

        {/* price, stock, discount, buttons */}
        <ProductDetails product={product} />
      </div>

      {/* product details, delivery info, refund policy */}

      {/* for laptop */}
      <ProductDesc product={product} />

      {/* for phone */}
      <PhoneProductDesc product={product} />

      {/* show related products based on category */}
      <RelatedProducts category={product?.category} />
    </section>
  );
};

export default ViewProduct;
