import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDesc = ({ product }) => {
  console.log(product);
  return (
    <section>
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger value="product-details">Product Details</TabsTrigger>
          <TabsTrigger value="delivery-information">
            Delivery Information
          </TabsTrigger>
          <TabsTrigger value="return-and-refund-policy">
            Return & Refund Policy
          </TabsTrigger>
        </TabsList>
        <TabsContent value="product-details">
          {product?.productDetails}
        </TabsContent>
        <TabsContent value="delivery-information">
          {product?.deliveryInformation}
        </TabsContent>
        <TabsContent value="return-and-refund-policy">
          {product?.returnRefundPolicy}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ProductDesc;
