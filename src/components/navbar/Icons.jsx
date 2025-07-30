import React, { useEffect } from "react";
import wishlist from "../../assets/Wishlist.png";
import cart from "../../assets/Cart1.png";
import user from "../../assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { showProfile } from "../../store/contextSlice";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { CartImg } from "../../pages/cart/Cart";
import { UserIcon } from "../../pages/home/AccountModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { syncGuestWishlistToFirestore } from "../../utils/firebaseStorage";
import { setWishlist } from "../../store/productSlice";

// export const syncGuestWishlistToFirestore = async (uid, guestWishlist) => {
//   try {
//     const ref = doc(db, "wishlists", uid);
//     const existing = await getDoc(ref);

//     let finalWishlist = guestWishlist;

//     if (existing.exists()) {
//       const serverWishlist = existing.data().items || [];
//       // Merge guest + server wishlist (avoid duplicates by id)
//       const ids = new Set(serverWishlist.map((item) => item.id));
//       finalWishlist = [
//         ...serverWishlist,
//         ...guestWishlist.filter((item) => !ids.has(item.id)),
//       ];
//     }

//     await setDoc(ref, { items: finalWishlist });
//   } catch (error) {
//     console.error("Failed to sync wishlist:", error);
//   }
// };

export const Like = ({ className }) => {
  return <CiHeart className={className} />;
};
export const Unlike = ({ className }) => {
  return <IoMdHeart className={className} />;
};

export default function Icons() {
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
    <div className="flex items-center gap-4">
      <div className="relative">
        <Link to={"/wishlist"}>
          <Like className={"bg-white size-8 p-1 rounded-full stroke-1 "} />{" "}
        </Link>
        <span className="absolute bg-[var(--red)] text-white p-[1px] px-[4px] text-[10px] rounded-full -top-1 -right-0 ">
          {wishlistCount.length}
        </span>
      </div>
      <div className="relative">
        <Link to={"/cart"}>
          <CartImg className="size-6 cursor-pointer" />
          <span className="absolute bg-[var(--red)] text-white p-[1px] px-[4px] text-[10px] rounded-full -top-2 -right-1 ">
            {cartCount.length}
          </span>
        </Link>
      </div>

      <UserIcon
        onClick={() => dispatch(showProfile())}
        className={
          user ? "text-white bg-[var(--red)] p-1.5 size-8 rounded-full" : ""
        }
      />
    </div>
  );
}
