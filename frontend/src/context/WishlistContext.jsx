import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add to Wishlist
  const addToWishlist = (product) => {
    const exists = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (exists) return;

    setWishlistItems((prev) => [...prev, product]);
  };

  // Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Check if Product Exists
  const isInWishlist = (id) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };

  // Clear Wishlist
  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const totalWishlistItems = wishlistItems.length;

return (
  <WishlistContext.Provider
    value={{
      wishlistItems,
      addToWishlist,
      removeFromWishlist,
      clearWishlist,
      isInWishlist,
      totalWishlistItems,
    }}
  >
      {children}
    </WishlistContext.Provider>
  );
}