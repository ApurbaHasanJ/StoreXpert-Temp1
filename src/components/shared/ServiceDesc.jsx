import { GoRocket } from "react-icons/go";
import { PiKeyReturn } from "react-icons/pi";
import { BsTruck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

const ServiceDesc = () => {
  return (
    <div className="bg-ghost/80 p-3 text-sm rounded-lg border-2 drop-shadow-sm lg:max-w-72 w-full grid lg:grid-cols-1 grid-cols-2 lg:gap-2 gap-8 justify-between">
      
        <div className="text-blue-800 flex gap-2 items-start w-full">
          <GoRocket className="text-xl mt-1" />{" "}
          <div className="w-full">
            <p className="border-b-2 text-base border-gray-300 pb-1">
              ডেলিভারি খরচঃ
            </p>
            <ul className="text-secondary/80 py-4">
              <li className="flex gap-2 justify-between">
                <p>ঢাকা শহরের ভিতরে</p>
                <span>৬০ টাকা</span>
              </li>
              <li className="flex mt-2 gap-2 justify-between">
                <p>ঢাকা শহরের বাইরে</p>
                <span>১৫০ টাকা</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-blue-800 flex gap-2 items-start">
          <PiKeyReturn className="text-3xl -mt-1" />{" "}
          <div>
            <p className="border-b-2 text-base border-gray-300 pb-1">
              রিটার্নঃ
            </p>
            <p className="text-secondary/80 py-3">
              ৭ দিনের মধ্যে ফ্রি রিটার্ন (
              <span className="text-primary px-1">
                যদি পণ্যে কোন সমস্যা থাকে
              </span>
              )
            </p>
          </div>
        </div>
        <div className="text-blue-800 flex gap-2 items-start">
          <BsTruck className="text-3xl -mt-1" />{" "}
          <div>
            <p className="border-b-2 text-base border-gray-300 pb-1">
              পণ্য হাতে পেয়ে পেমেন্টঃ
            </p>
            <p className="text-secondary/80 py-3">
              ৪৮-৭২ ঘণ্টার মধ্যে সারা দেশে ক্যাশ অন ডেলিভারি
            </p>
          </div>
        </div>
        <div className="text-blue-800 flex gap-2 items-start">
          <RiCustomerService2Line className="text-5xl -mt-3" />{" "}
          <div>
            <p className="border-b-2 text-base border-gray-300 pb-1">
              কাস্টমার সার্ভিসঃ
            </p>
            <p className="text-secondary/80 py-3">
              সকাল ১০ টা থেকে রাত ১১ টা পর্যন্ত আমাদের কল অথবা হোয়াটসঅ্যাপ করতে
              পারেন
            </p>
          </div>
        </div>
      
    </div>
  );
};

export default ServiceDesc;
