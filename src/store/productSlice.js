import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    Myproducts: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    cartModal: false,
    paymentSuccess: false,
    productCategory: null,
    clickedProduct: null,
    myOrder: JSON.parse(localStorage.getItem("myOrder")) || [],
    myCancellations: [],
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
          state.cartModal = true;
        }
      }

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    setCart: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    AddAllWishlistToCart: (state) => {
      const idsInCart = new Set(state.cart.map((item) => item.id));
      const itemsToAdd = state.wishlist.filter(
        (item) => !idsInCart.has(item.id)
      );
      state.cart.push(...itemsToAdd);
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
    setWishlist: (state, action) => {
      state.wishlist = action.payload;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    RemoveFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify([...state.cart]));
    },
    RemoveFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
    },

    Checkout: (state) => {
      const idsInOrder = new Set(state.myOrder.map((item) => item.id));
      const itemsToAdd = state.cart.filter((item) => !idsInOrder.has(item.id));

      state.cart = [];
      state.myOrder.push(...itemsToAdd);

      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("myOrder", JSON.stringify(state.myOrder));
    },
    removeCartModal: (state) => {
      state.cartModal = false;
    },
    showPaymentSuccess: (state) => {
      state.paymentSuccess = true;
    },
    hidePaymentSuccess: (state) => {
      state.paymentSuccess = false;
    },
    setProductCategory: (state, action) => {
      state.productCategory = action.payload;
    },
    setClickedProduct: (state, action) => {
      state.clickedProduct = action.payload;
    },
    hideClickedProduct: (state) => {
      state.clickedProduct = null;
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
  setWishlist,
  setCart,
  setClickedProduct,
  hideClickedProduct,
  showPaymentSuccess,
  hidePaymentSuccess,
} = ProductSlice.actions;
export default ProductSlice.reducer;
