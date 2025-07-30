import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export const syncGuestWishlistToFirestore = async (uid, guestWishlist) => {
  try {
    const ref = doc(db, "wishlists", uid);
    const existing = await getDoc(ref);

    let finalWishlist = guestWishlist;

    if (existing.exists()) {
      const serverWishlist = existing.data().items || [];
      // Merge guest + server wishlist (avoid duplicates by id)
      const ids = new Set(serverWishlist.map((item) => item.id));
      finalWishlist = [
        ...serverWishlist,
        ...guestWishlist.filter((item) => !ids.has(item.id)),
      ];
    }

    await setDoc(ref, { items: finalWishlist });
  } catch (error) {
    console.error("Failed to sync wishlist:", error);
  }
};

export const getWishlistFromFirestore = async (uid) => {
  try {
    const ref = doc(db, "wishlists", uid);
    const snapshot = await getDoc(ref);

    if (snapshot.exists()) {
      const data = snapshot.data();
      return data.items || []; // fallback to empty array
    } else {
      return []; // no wishlist yet
    }
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return [];
  }
};

// Sync guest cart to Firestore
export const syncGuestCartToFirestore = async (uid, guestCart) => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const existingCart = userSnap.data().cart || [];

    const newCart = [...existingCart];

    guestCart.forEach((guestItem) => {
      const index = newCart.findIndex((item) => item.id === guestItem.id);
      if (index !== -1) {
        newCart[index].quantity += guestItem.quantity;
      } else {
        newCart.push(guestItem);
      }
    });

    await setDoc(userRef, { cart: newCart }, { merge: true });
  } else {
    await setDoc(userRef, { cart: guestCart });
  }
};

// Get cart from Firestore
export const getCartFromFirestore = async (uid) => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  return userSnap.exists() ? userSnap.data().cart || [] : [];
};
