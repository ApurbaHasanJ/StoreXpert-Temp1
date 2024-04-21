import CheckoutForm from "@/components/CheckoutForm";
import Cart from "@/components/shared/Cart";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const [deliveryCharge, setDeliveryCharge] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="bg-ghost  py-10">
      <div className="container flex max-lg:flex-col-reverse gap-5">
        <div className="bg-white shadow-md rounded-xl p-5 lg:w-1/2 h-fit">
          <p className="text-center md:text-xl text-lg font-medium mb-10">
            অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার লিখে &apos;
            <span className="text-primary font-semibold">
              অর্ডার কনফার্ম করুন
            </span>
            &apos; বাটনে ক্লিক করুন
          </p>
          <CheckoutForm
            deliveryCharge={deliveryCharge}
            setDeliveryCharge={setDeliveryCharge}
          />
        </div>
        <div className="lg:w-1/2">
          <Cart deliveryCharge={deliveryCharge} />
        </div>
      </div>
    </section>
  );
};

export default Checkout;
