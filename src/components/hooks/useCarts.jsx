import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useCarts = () => {
  const [carts, setCarts] = useState([]);

  console.log({ carts });

  useEffect(() => {
    setCarts(JSON.parse(localStorage.getItem("wownex_carts")) || []);
  }, []);

  // Add to carts
  const handleAddCart = (_id, quantity) => {
    const currentCart = JSON.parse(localStorage.getItem("wownex_carts")) || [];

    const existingItemIndex = currentCart.findIndex((item) => item._id === _id);

    if (existingItemIndex < 0) {
      // If the item exists, update its quantity
      const updatedCart = { _id, quantity };
      currentCart.push(updatedCart);
      toast.success("Item added to the cart");
    } else {
      currentCart[existingItemIndex].quantity += quantity;
      toast.success("Quantity updated successfully");
    }
    localStorage.setItem("wownex_carts", JSON.stringify(currentCart));
    setCarts(currentCart);
  };

  // handle remove from cart
  const handleRemoveCart = (_id) => {
    const updatedCarts = carts.filter((item) => item._id !== _id);
    localStorage.setItem("wownex_carts", JSON.stringify(updatedCarts));
    setCarts(updatedCarts);
    toast.success("Item removed successfully");
  };

  return { handleAddCart, carts, handleRemoveCart };
};

export default useCarts;
