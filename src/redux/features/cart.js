import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Define the initial state for the cart
const initialState = {
  products: [], // Array to store products added to the cart
  selectedItem: 0, // Counter to track the total number of unique items in the cart
  subTotal: 0, // Total price of all items in the cart
};

// Create a slice for managing the cart state. This includes handling additions, removals, and quantity adjustments of cart items
export const cartSlice = createSlice({
  name: "cart", // The name of the slice
  initialState, // The initial state of the slice
  reducers: {
    // Reducer to handle adding items to the cart
    addToCart: (state, action) => {
      // Check if the item already exists in the cart to prevent duplicates
      const isExist = state.products?.find(
        (item) => item._id === action.payload._id
      );

      // Add item to the cart if it doesn't exist
      if (!isExist) {
        state.products?.push({ ...action.payload, quantity: 1 });
        state.selectedItem += 1; // Increment the count of unique items
        toast.success("Item added successfully"); // Show success message
      } else {
        // If the item already exists, notify the user
        toast.error("Item already in cart");
      }

      // Recalculate the subtotal after adding the item
      state.subTotal = calculateSubTotal(state);
    },

    // Reducer to handle removing items from the cart
    removeFromCart: (state, action) => {
      // Filter out the item to be removed from the products array
      state.products = state.products?.filter(
        (item) => item._id !== action.payload
      );
      state.selectedItem -= 1; // Decrement the count of unique items
      toast.success("Item removed successfully"); // Show success message

      // Recalculate the subtotal after removal
      state.subTotal = calculateSubTotal(state);
    },

    // Reducer to increase the quantity of a specific item in the cart
    increaseQuantity: (state, action) => {
      // Find the item by ID
      const product = state.products?.find(
        (item) => item._id === action.payload
      );

      // Increase quantity and recalculate subtotal if the item is found
      if (product) {
        product.quantity += 1;
        state.subTotal = calculateSubTotal(state);
      }
    },

    // Reducer to decrease the quantity of a specific item in the cart
    decreaseQuantity: (state, action) => {
      const product = state.products?.find(
        (item) => item._id === action.payload
      );

      // Decrease quantity only if it is greater than 1 to avoid negative quantities
      if (product && product?.quantity > 1) {
        product.quantity -= 1;
        state.subTotal = calculateSubTotal(state); // Recalculate subtotal after decrementing quantity
      }
    },
  },
});

// Function to calculate the total price based on products and their quantities
export const calculateSubTotal = (state) => {
  return state.products.reduce((total, product) => {
    return (
      total + (product?.discountedPrice || product?.price) * product.quantity
    );
  }, 0);
};

// Export actions and reducer
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
