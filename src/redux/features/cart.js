import { createSlice } from "@reduxjs/toolkit";

// Define initial state for the cart
const initialState = {
  products: [], // Array to store products in the cart
  selectedItem: 0, // Counter to track the total number of items in the cart
  subTotal: 0, // Total price of all items in the cart
};

// Create a slice for the cart state using Redux Toolkit
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const isExist = state.products?.find(
        (item) => item?._id === action?.payload?._id
      );

      // If the item doesn't exist in the cart, add it
      if (!isExist) {
        // Push the new item to the products array with a quantity of 1
        state.products?.push({ ...action?.payload, quantity: 1 });
        // Increase selectedItem when a new item is added
        state.selectedItem += 1;
      }

      // Recalculate total price
      state.subTotal = calculateSubTotal(state);
    },

    removeFromCart: (state, action) => {
      // Remove the item from the products array
      state.products = state.products?.filter(
        (item) => item?._id !== action?.payload
      );

      // Recalculate total price
      state.subTotal = calculateSubTotal(state);
    },

    increaseQuantity: (state, action) => {
      // Find the item in the cart by its ID
      const product = state.products?.find(
        (item) => item?._id === action?.payload
      );

      // If the item exists, increase its quantity by 1
      if (product) {
        product.quantity += 1;
        // Recalculate total price
        state.subTotal = calculateSubTotal(state);
      }
    },

    decreaseQuantity: (state, action) => {
      // Find the item in the cart by its ID
      const product = state.products.find(
        (item) => item._id === action.payload
      );

      // If the item exists and its quantity is greater than 1, decrease its quantity by 1
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        // Recalculate total price correctly by passing the entire state, not just state.products
        state.subTotal = calculateSubTotal(state);
      }
    },
  },
});

// Function to calculate the total price based on products and their quantities
export const calculateSubTotal = (state) =>
  // Use reduce to sum the total price of all products in the cart
  state.products?.reduce((total, product) => {
    return Number(total + product?.price * product?.quantity);
  }, 0);

// Export actions and reducer
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
