import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import cart from "../../assets/Cart1.png";
import search from "../../assets/Vector.png";
import { showSideBar } from "../../store/contextSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Like } from "./Icons";
import { CartImg } from "../../pages/cart/Cart";
import { IoSearch } from "react-icons/io5";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {
  getCartFromFirestore,
  getWishlistFromFirestore,
  syncGuestCartToFirestore,
  syncGuestWishlistToFirestore,
} from "../../utils/firebaseStorage";
import { setCart, setWishlist } from "../../store/productSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const wishlistCount = useSelector((state) => state.productsAuth.wishlist);
  const cartCount = useSelector((state) => state.productsAuth.cart);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // --- Sync Guest Wishlist ---
        const guestWishlist =
          JSON.parse(localStorage.getItem("wishlist")) || [];
        if (guestWishlist.length > 0) {
          await syncGuestWishlistToFirestore(user.uid, guestWishlist);
          localStorage.removeItem("wishlist");
        }

        const wishlist = await getWishlistFromFirestore(user.uid);
        dispatch(setWishlist(wishlist));
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        // --- Sync Guest Cart ---
        const guestCart = JSON.parse(localStorage.getItem("cart")) || [];
        if (guestCart.length > 0) {
          await syncGuestCartToFirestore(user.uid, guestCart);
          localStorage.removeItem("cart");
        }

        const cart = await getCartFromFirestore(user.uid);
        dispatch(setCart(cart));
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        // Optional: fallback for guests
        dispatch(setWishlist([]));
        dispatch(setCart([]));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div className="flex lg:hidden items-center gap-4">
      <div className="relative">
        <Link to={"/cart"}>
          <CartImg className="size-6 cursor-pointer" />
        </Link>
        <span className="absolute bg-[var(--red)] text-white p-[1px] px-[4px] text-[10px] rounded-full -top-2 -right-1 ">
          {cartCount.length}
        </span>
      </div>
      <div className="relative">
        <Link to={"/wishlist"}>
          <Like className={"bg-white size-8 p-1 rounded-full stroke-1 "} />
        </Link>
        <span className="absolute bg-[var(--red)] text-white p-[1px] px-[4px] text-[10px] rounded-full -top-1 -right-0 ">
          {wishlistCount.length}
        </span>
      </div>

      <IoSearch className="size-6" />

      <GiHamburgerMenu onClick={() => dispatch(showSideBar())} size={23} />
    </div>
  );
}
