import { NavLink } from "react-router-dom";
import {
  FiHeart,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

import useCart from "../../hooks/useCart";
import useWishlist from "../../hooks/useWishlist";

function NavIcons() {
  const { totalItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  return (
    <div className="flex items-center gap-5 text-2xl text-white">

      {/* Wishlist */}
      <NavLink
        to="/wishlist"
        className="relative hover:text-pink-500 transition"
      >
        <FiHeart />

        {totalWishlistItems > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center">
            {totalWishlistItems}
          </span>
        )}
      </NavLink>

      {/* Cart */}
      <NavLink
        to="/cart"
        className="relative hover:text-pink-500 transition"
      >
        <FiShoppingCart />

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </NavLink>

      {/* User */}
      <NavLink
        to="/login"
        className="hover:text-pink-500 transition"
      >
        <FiUser />
      </NavLink>
    </div>
  );
}

export default NavIcons;