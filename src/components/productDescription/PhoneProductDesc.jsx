import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PhoneProductDesc = ({ product }) => {
  return (
    <section className="sm:hidden">
      <Accordion defaultValue="product-details" type="single" collapsible className="grid grid-cols-1 gap-2">
        {/* Product Details */}
        <AccordionItem value="product-details">
          <AccordionTrigger>Product Details</AccordionTrigger>
          <AccordionContent>{product?.productDetails}</AccordionContent>
        </AccordionItem>
        {/* Delivery Information */}
        <AccordionItem value="delivery-information">
          <AccordionTrigger>Delivery Information</AccordionTrigger>
          <AccordionContent>{product?.deliveryInformation}</AccordionContent>
        </AccordionItem>
        {/* Return & Refund Policy */}
        <AccordionItem value="return-refund-policy">
          <AccordionTrigger>Return & Refund Policy</AccordionTrigger>
          <AccordionContent>{product?.returnRefundPolicy}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default PhoneProductDesc;
