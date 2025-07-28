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
import ProductListing from "./products/ProductListing";

export const Products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    bestselling: true,
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
    category: "Clothing",
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
  {
    id: 16,
    name: "Canon EOS R10",
    bestselling: true,
    flash: false,
    img: "/camera2-removebg-preview.png",
    price: 1199,
    discount: 30,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "A lightweight APS‑C mirrorless camera offering a 24 MP Dual Pixel CMOS sensor, fast 15 fps burst (23 fps electronic), excellent subject‑tracking autofocus, and 4K video capabilities—ideal for beginners and content creators seeking versatility and high performance at an accessible price.",
    category: "Camera",
    images: [
      "/camera2-removebg-preview.png",
      "/camera2-removebg-preview.png",
      "/camera2-removebg-preview.png",
      "/camera2-removebg-preview.png",
    ],
  },
  {
    id: 17,
    name: "Sony α6700",
    bestselling: true,
    flash: false,
    img: "/camera3-removebg-preview.png",
    price: 1699,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "A well-rounded APS‑C mirrorless hybrid camera built around a 26 MP sensor, with stellar autofocus tracking (AI‑driven subject recognition), 4K video support, extended battery life, and compact form—excellent for travel, photography, and videography. ",
    category: "Camera",
    images: [
      "/camera3-removebg-preview.png",
      "/camera3-removebg-preview.png",
      "/camera3-removebg-preview.png",
      "/camera3-removebg-preview.png",
    ],
  },
  {
    id: 16,
    name: "Canon EOS R10",
    bestselling: true,
    flash: true,
    img: "/camera4-removebg-preview.png",
    price: 1500,
    discount: 10,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "A stylish and compact mirrorless camera with a 40 MP BSI-CMOS sensor, 7‑stop in‑body stabilization (IBIS), dedicated film‑simulation dial, and 6.2K video capture. Its retro design and intuitive control layout make it especially appealing for street and travel photography",
    category: "Camera",
    images: [
      "/camera4-removebg-preview.png",
      "/camera4-removebg-preview.png",
      "/camera4-removebg-preview.png",
      "/camera4-removebg-preview.png",
    ],
  },
  {
    id: 18,
    name: "Canon EOS R10",
    bestselling: true,
    flash: true,
    img: "/camera4-removebg-preview.png",
    price: 1500,
    discount: 10,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "A stylish and compact mirrorless camera with a 40 MP BSI-CMOS sensor, 7‑stop in‑body stabilization (IBIS), dedicated film‑simulation dial, and 6.2K video capture. Its retro design and intuitive control layout make it especially appealing for street and travel photography",
    category: "Camera",
    images: [
      "/camera4-removebg-preview.png",
      "/camera4-removebg-preview.png",
      "/camera4-removebg-preview.png",
      "/camera4-removebg-preview.png",
    ],
  },
  {
    id: 20,
    name: "Razer Blade 16",
    bestselling: true,
    flash: false,
    img: "/game3-removebg-preview.png",
    price: 3000,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      " A sleek 16‑inch dual-mode OLED gaming laptop powered by AMD Ryzen AI 9 HX 370 and Nvidia RTX 5090 (24 GB). Delivers up to 240 Hz QHD+ visuals, long battery life for a gamer's rig, per‑key RGB keyboard, high-end audio, and a generous port selection—all in a surprisingly thin and lightweight design",
    category: "Gaming",
    images: [
      "/game3-removebg-preview.png",
      "/game3-removebg-preview.png",
      "/game3-removebg-preview.png",
      "/game3-removebg-preview.png",
    ],
  },
  {
    id: 21,
    name: "The PlayStation 5",
    bestselling: true,
    flash: true,
    img: "/game4-removebg-preview.png",
    price: 1500,
    discount: 10,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "he PlayStation 5 (PS5) is Sony’s most powerful gaming console yet, featuring a custom ultra-fast SSD for near-instant load times, ray tracing technology for lifelike lighting and shadows, and 4K gaming at up to 120 FPS.",
    category: "Gaming",
    images: [
      "/game4-removebg-preview.png",
      "/game4-removebg-preview.png",
      "/game4-removebg-preview.png",
      "/game4-removebg-preview.png",
    ],
  },
  {
    id: 22,
    name: "Sony WH‑1000XM6 Wireless Headphones",
    bestselling: true,
    flash: true,
    img: "/headphone1-removebg-preview.png",
    price: 450,
    discount: 22,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "Sony’s flagship WH‑1000XM6 deliver world-class active noise cancellation (ANC), a rich and warm sound profile, over 30 hours battery life (ANC on), multi-device pairing support (LDAC/LC3), spatial audio options, and a lightweight comfortable fit ideal for long listening sessions",
    category: "Headphones",
    images: [
      "/headphone1-removebg-preview.png",
      "/headphone1-removebg-preview.png",
      "/headphone1-removebg-preview.png",
      "/headphone1-removebg-preview.png",
    ],
  },
  {
    id: 23,
    name: "Bose QuietComfort Ultra Headphones",
    bestselling: true,
    flash: true,
    img: "/headphone2-removebg-preview.png",
    price: 370,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "Known for exceptional comfort and market-leading noise cancellation, these over-ear headphones provide balanced, rich audio, intuitive controls, Bluetooth 5.3 support, solid 24-hour battery life, and roomier earcup fit—perfect for travel and frequent flyers",
    category: "Headphones",
    images: [
      "/headphone2-removebg-preview.png",
      "/headphone2-removebg-preview.png",
      "/headphone2-removebg-preview.png",
      "/headphone2-removebg-preview.png",
    ],
  },
  {
    id: 24,
    name: "JBL Headphones",
    bestselling: true,
    flash: true,
    img: "/headphone3-removebg-preview.png",
    price: 300,
    discount: 12,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "A bold aesthetic choice with transparent earcup panels and distinctive physical controls including a scroll dial. Delivers decent ANC, high-res audio performance via KEF collaboration, and up to 35 hours of battery life—ideal for users wanting design flair on a budget",
    category: "Headphones",
    images: [
      "/headphone3-removebg-preview.png",
      "/headphone3-removebg-preview.png",
      "/headphone3-removebg-preview.png",
      "/headphone3-removebg-preview.png",
    ],
  },
  {
    id: 25,
    name: "Air Pods Pro",
    bestselling: true,
    flash: true,
    img: "/headphone4-removebg-preview.png",
    price: 450,
    discount: 22,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "Air Pods Pro offer outstanding active noise cancellation, stellar sound staging, up to 8.5–9 hours battery per charge, multipoint connection, memory‑foam tips for comfort/fit, and one of the most refined audio experiences in a compact package",
    category: "Headphones",
    images: [
      "/headphone4-removebg-preview.png",
      "/headphone4-removebg-preview.png",
      "/headphone4-removebg-preview.png",
      "/headphone4-removebg-preview.png",
    ],
  },
  {
    id: 26,
    name: "HP Omen MAX 16",
    bestselling: true,
    flash: true,
    img: "/laptop1-removebg-preview.png",
    price: 2499.99,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "Flagship 16″ gaming laptop featuring an Intel Core Ultra 9 275HX CPU, NVIDIA GeForce RTX 5090 GPU, up to 64 GB RAM, and a 240 Hz OLED 1600p display. Equipped with automatic fan cleaning, wireless support for HyperX gear, and full overclocking controls via the OMEN Gaming Hub. High-end performance in a refined aluminum chassis. Battery life is limited (≈3 hrs), and fans can be loud under load",
    category: "Computers",
    images: [
      "/laptop1-removebg-preview.png",
      "/laptop1-removebg-preview.png",
      "/laptop1-removebg-preview.png",
      "/laptop1-removebg-preview.png",
    ],
  },
  {
    id: 27,
    name: "Apple MacBook Air",
    bestselling: true,
    flash: true,
    img: "/laptop3-removebg-preview.png",
    price: 1199,
    discount: 22,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      "The newest MacBook Air powered by Apple’s M4 chip, available in both 13.6″ and 15.3″ Liquid Retina display models. Offers support for up to three external displays, 16 GB base RAM, a 12 MP Center Stage webcam, MagSafe charging, Wi‑Fi 6E, Bluetooth 5.3, and up to 20 hours of battery life. Standout for everyday performance, ultra‑light design, and reliable Apple ecosystem experience",
    category: "Computers",
    images: [
      "/laptop3-removebg-preview.png",
      "/laptop3-removebg-preview.png",
      "/laptop3-removebg-preview.png",
      "/laptop3-removebg-preview.png",
    ],
  },
  {
    id: 28,
    name: "HP Spectre x360",
    bestselling: true,
    flash: true,
    img: "/laptop4-removebg-preview.png",
    price: 1600,
    discount: 22,
    quantity: 1,
    rating: { rate: 3.9, count: 88 },
    description:
      " Premium 2‑in‑1 convertible laptop with a 16″ OLED touchscreen (≈2.8K), Intel Core Ultra 7 155H CPU, and optional NVIDIA RTX 4050 GPU. Features 360° hinge design, stylus support, full‑HD IR webcam, Bang & Olufsen speakers, and luxurious aluminum build quality with long battery life up to ≈10 hours for light workloads. Lightweight and great for creative users or business professionals",
    category: "Computers",
    images: [
      "/laptop4-removebg-preview.png",
      "/laptop4-removebg-preview.png",
      "/laptop4-removebg-preview.png",
      "/headphone4-removebg-preview.png",
    ],
  },
  {
    id: 29,
    name: "Apple iPhone 13 Pro Max",
    bestselling: true,
    flash: false,
    img: "/phone1-removebg-preview.png",
    price: 799,
    quantity: 1,
    rating: { rate: 4.5, count: 1200 },
    description:
      "6.7″ Super Retina XDR OLED with ProMotion, A15 Bionic chip, triple‑camera with LiDAR, stainless‑steel frame, Ceramic Shield. Still smooth and durable in 2025.",
    category: "Phones",
    images: [
      "/phone1-removebg-preview.png",
      "/phone1-removebg-preview.png",
      "/phone1-removebg-preview.png",
      "/phone1-removebg-preview.png",
    ],
  },
  {
    id: 30,
    name: "Apple iPhone 16",
    bestselling: true,
    flash: true,
    img: "/phone3-removebg-preview.png",
    price: 799,
    quantity: 1,
    rating: { rate: 4.3, count: 900 },
    description:
      "6.1″ OLED display, A18 chip with Apple Intelligence features, customizable Action Button. Great for mainstream users wanting modern performance at a fair price.",
    category: "Phones",
    images: [
      "/phone3-removebg-preview.png",
      "/phone3-removebg-preview.png",
      "/phone3-removebg-preview.png",
      "/phone3-removebg-preview.png",
    ],
  },
  {
    id: 31,
    name: "OPPO A80",
    bestselling: true,
    flash: false,
    img: "/phone2-removebg-preview.png",
    price: 369,
    quantity: 1,
    rating: { rate: 3.9, count: 300 },
    description:
      "Budget‑friendly 5G smartphone with Mediatek Dimensity, 8 GB RAM, 256 GB storage, 45 W charging and durable design – great entry‑mid range value.",
    category: "Phones",
    images: [
      "/phone2-removebg-preview.png",
      "/phone2-removebg-preview.png",
      "/phone2-removebg-preview.png",
      "/phone2-removebg-preview.png",
    ],
  },
  {
    id: 32,
    name: "Samsung Galaxy S21 Ultra",
    bestselling: true,
    flash: false,
    img: "/phone4-removebg-preview.png",
    price: 250,
    discount: 0,
    quantity: 1,
    rating: { rate: 4.4, count: 800 },
    description:
      "6.8″ 120 Hz AMOLED display, advanced camera, long software support—still a high‑end performer in 2025 at refurbished prices.",
    category: "Phones",
    images: [
      "/phone4-removebg-preview.png",
      "/phone4-removebg-preview.png",
      "/phone4-removebg-preview.png",
      "/phone4-removebg-preview.png",
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
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductListing />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
