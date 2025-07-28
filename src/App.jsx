import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import { useDispatch, useSelector } from "react-redux";
// import { Products } from "./pages/home/Section2";
import { UpdateProducts } from "./store/productSlice";
import Wishlist from "./pages/wishlist/Wishlist";
import Details from "./pages/details/Details";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import AddToCartModal from "./pages/cart/AddToCartModal";
import CheckOut from "./pages/checkoutpg/CheckOut";
import Account from "./pages/account/Account";
import { LogoutMD } from "./components/navbar/PageSlide";

export const Products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    bestselling: false,
    flash: true,
    img: "/Frame 611.png",
    price: 120,
    discount: 40,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "Offers precise control, ensures maximum productivity, optimized for long sessions, and trusted by gamers worldwide. Built with quality, compact, durable, and responsive design.",
    category: "Gaming",
    images: [
      "/Frame 611.png",
      "/Frame 611.png",
      "/Frame 611.png",
      "/Frame 611.png",
    ],
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    bestselling: false,
    flash: true,
    img: "/Frame 612 (1).png",
    price: 960,
    discount: 35,
    quantity: 1,
    rating: { rate: 3.9, count: 75 },
    description:
      "Features responsive keys, macro support, RGB backlighting, and durable construction. Delivers fast typing, low latency, and professional-grade reliability for daily computing tasks.",
    category: "Computers",
    images: [
      "/Frame 612 (1).png",
      "/Frame 612 (1).png",
      "/Frame 612 (1).png",
      "/Frame 612 (1).png",
    ],
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    bestselling: false,
    flash: true,
    img: "/Frame 613.png",
    price: 370,
    discount: 30,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Optimized for gamers, this monitor provides fast refresh, crisp visuals, ergonomic design, durable build, and minimal input lag—perfect for immersive and competitive gameplay.",
    category: "Gaming",
    images: [
      "/Frame 613.png",
      "/Frame 613.png",
      "/Frame 613.png",
      "/Frame 613.png",
    ],
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    bestselling: false,
    flash: true,
    img: "/Frame 614.png",
    price: 375,
    discount: 25,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Designed for comfort and support during long hours. Ergonomic structure, smooth swivel, adjustable height, and premium leather ensure relaxed posture for extended productivity.",
    category: "Gaming",
    images: [
      "/Frame 614.png",
      "/Frame 614.png",
      "/Frame 614.png",
      "/Frame 614.png",
    ],
  },
  {
    id: 5,
    name: "The North Coat",
    bestselling: false,
    flash: true,
    img: "/Frame 605.png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Provides warmth, water resistance, and breathability in one. Designed for outdoor durability, stylish appeal, and all-day comfort in extreme cold weather conditions.",
    category: "Gaming",
    images: [
      "/Frame 605.png",
      "/Frame 605.png",
      "/Frame 605.png",
      "/Frame 605.png",
    ],
  },
  {
    id: 6,
    name: "Gucci Duffle Bag",
    bestselling: true,
    flash: true,
    img: "/Frame 606.png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Combines lightweight cushioning, sleek design, and breathable upper for all-day comfort. Perfect for everyday wear, training, and performance in dynamic environments.",
    category: "Gaming",
    images: [
      "/Frame 606.png",
      "/Frame 606.png",
      "/Frame 606.png",
      "/Frame 606.png",
    ],
  },
  {
    id: 7,
    name: "Jr. Zoom Soccer Cleats",
    bestselling: false,
    flash: true,
    img: "/Frame 608 (1).png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Classic design with premium materials, cushioned midsole, and durable rubber sole. A streetwear staple known for comfort, style, and timeless athletic appeal.",
    category: "Gaming",
    images: [
      "/Frame 608 (1).png",
      "/Frame 608 (1).png",
      "/Frame 608 (1).png",
      "/Frame 608 (1).png",
    ],
  },
  {
    id: 8,
    name: "GP11 Shooter USB Gamepad",
    bestselling: false,
    flash: true,
    img: "/Frame 608 (2).png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Efficient thermal control with customizable RGB lighting, low noise fans, and strong build. Keeps CPU temperatures down while enhancing PC aesthetics and performance.",
    category: "Gaming",
    images: [
      "/Frame 608 (2).png",
      "/Frame 608 (2).png",
      "/Frame 608 (2).png",
      "/Frame 608 (2).png",
    ],
  },
  {
    id: 9,
    name: "Quilted Satin Jacket",
    bestselling: false,
    flash: false,
    img: "/Frame 608 (3).png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Provides warmth, water resistance, and breathability in one. Designed for outdoor durability, stylish appeal, and all-day comfort in extreme cold weather conditions.",
    category: "Gaming",
    images: [
      "/Frame 608 (3).png",
      "/Frame 608 (3).png",
      "/Frame 608 (3).png",
      "/Frame 608 (3).png",
    ],
  },
  {
    id: 10,
    name: "Kids Electric Car",
    bestselling: true,
    flash: false,
    img: "/Frame 608.png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Battery-powered customizable RGB lighting, low noise fans, and strong build. Keeps CPU temperatures down while enhancing PC aesthetics and performance.",
    category: "Gaming",
    images: [
      "/Frame 608.png",
      "/Frame 608.png",
      "/Frame 608.png",
      "/Frame 608.png",
    ],
  },
  {
    id: 11,
    name: "RGB Liquid CPU Cooler",
    bestselling: false,
    flash: false,
    img: "/Frame 610.png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Features responsive keys, macro support, RGB backlighting, and durable construction. Delivers fast typing, low latency, and professional-grade reliability for daily computing tasks.",
    category: "Computers",
    images: [
      "/Frame 610.png",
      "/Frame 610.png",
      "/Frame 610.png",
      "/Frame 610.png",
    ],
  },
  {
    id: 12,
    name: "Breed Dry Dog Food",
    bestselling: false,
    flash: false,
    img: "/Frame 604.png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Compact and durable, fits in small spaces, perfect for storing books, plants, or decor. Easy to assemble, minimalist design with sturdy wooden build.",
    category: "Gaming",
    images: [
      "/Frame 604.png",
      "/Frame 604.png",
      "/Frame 604.png",
      "/Frame 604.png",
    ],
  },
  {
    id: 13,
    name: "CANON EOS DSLR Camera",
    bestselling: true,
    flash: false,
    img: "/Frame 604 (1).png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Features responsive keys, macro support, RGB backlighting, and durable construction. Delivers fast typing, low latency, and professional-grade reliability for daily computing tasks.",
    category: "Camera",
    images: [
      "/Frame 604 (1).png",
      "/Frame 604 (1).png",
      "/Frame 604 (1).png",
      "/Frame 604 (1).png",
    ],
  },
  {
    id: 14,
    name: "ASUS FHD Gaming Laptop",
    bestselling: false,
    flash: false,
    img: "/Frame 604 (2).png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Compact and durable, fits in small spaces, perfect for storing books, plants, or decor. Easy to assemble, minimalist design with sturdy wooden build.",
    category: "Computers",
    images: [
      "/Frame 604 (2).png",
      "/Frame 604 (2).png",
      "/Frame 604 (2).png",
      "/Frame 604 (2).png",
    ],
  },
  {
    id: 15,
    name: "AK-900 Wired Keyboard",
    bestselling: true,
    flash: false,
    img: "/Frame 612.png",
    price: 260,
    quantity: 1,
    rating: { rate: 3.9, count: 99 },
    description:
      "Features responsive keys, macro support, RGB backlighting, and durable construction. Delivers fast typing, low latency, and professional-grade reliability for daily computing tasks.",
    category: "Computers",
    images: [
      "/Frame 612.png",
      "/Frame 612.png",
      "/Frame 612.png",
      "/Frame 612.png",
    ],
  },
];

export const useProducts = () => {
  const dispatch = useDispatch();
  const myProducts = useSelector((state) => state.productsAuth.Myproducts);

  useEffect(() => {
    if (!myProducts || myProducts.length === 0) {
      dispatch(UpdateProducts(Products));
    }
  }, [dispatch, myProducts]);

  return myProducts;
};

const App = () => {
  // console.log(myProducts);
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AddToCartModal />
      <LogoutMD />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact-us"
            element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckOut />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
