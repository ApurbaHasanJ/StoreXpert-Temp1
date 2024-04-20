import { createContext } from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [totalQuantity, setQuantity] = useState([]);

  //   get cart
  useEffect(() => {
    const currentCart = JSON.parse(localStorage.getItem("wownex_carts")) || [];
    setCarts(currentCart);
    const quantity = carts.reduce((acc, item) => acc + item.quantity, 0);
    console.log(quantity)
    setQuantity(quantity);
  }, []);

  //   console.log({ totalQuantity });

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

  return (
    <CartContext.Provider
      value={{ totalQuantity, carts, handleAddCart, handleRemoveCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
