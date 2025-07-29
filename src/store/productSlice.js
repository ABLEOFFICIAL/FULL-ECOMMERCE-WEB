import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    Myproducts: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    cartModal: false,
    productCategory: "all",
  },
  reducers: {
    UpdateProducts: (state, action) => {
      state.Myproducts = action.payload;
    },
    AddToCart: (state, action) => {
      const itemExists = state.cart.some((item) => item.id === action.payload);

      if (!itemExists) {
        const item = state.Myproducts.find(
          (item) => item.id === action.payload
        );
        if (item) {
          state.cart.push(item);
          console.log("Item added to cart");
          state.cartModal = true;
        }
      }

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    AddAllWishlistToCart: (state) => {
      state.cart.push(...state.wishlist);
      state.wishlist = [];
      localStorage.setItem("wishlist", JSON.stringify([]));
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    AddToWishlist: (state, action) => {
      const index = state.wishlist.findIndex(
        (item) => item.id === action.payload
      );

      if (index !== -1) {
        state.wishlist.splice(index, 1);
      } else {
        const addedProduct = state.Myproducts.find(
          (item) => item.id === action.payload
        );
        if (addedProduct) {
          state.wishlist.push(addedProduct);
        }
      }

      // Save to localStorage
      localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
    },
    RemoveFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    RemoveFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },

    Checkout: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify([]));
    },
    removeCartModal: (state) => {
      state.cartModal = false;
    },
    setProductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
  },
});

export const {
  UpdateProducts,
  AddToCart,
  AddToWishlist,
  Checkout,
  RemoveFromCart,
  removeCartModal,
  RemoveFromWishlist,
  AddAllWishlistToCart,
  setProductCategory,
} = ProductSlice.actions;
export default ProductSlice.reducer;
