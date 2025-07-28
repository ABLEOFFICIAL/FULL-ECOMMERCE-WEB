import React from "react";
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

export const Like = ({ className }) => {
  return <CiHeart className={className} />;
};
export const Unlike = ({ className }) => {
  return <IoMdHeart className={className} />;
};

export default function Icons() {
  const toggle = useSelector((state) => state.context.toggle);
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const dispatch = useDispatch();
  const wishlistCount = useSelector((state) => state.productsAuth.wishlist);
  const cartCount = useSelector((state) => state.productsAuth.cart);

  // console.log(toggle);

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
