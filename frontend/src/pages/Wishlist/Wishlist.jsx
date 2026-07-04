import useWishlist from "../../hooks/useWishlist";

import WishlistList from "../../components/wishlist/WishlistList";
import EmptyWishlist from "../../components/wishlist/EmptyWishlist";

function Wishlist() {
  const { wishlistItems } = useWishlist();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold mb-10">
        My Wishlist
      </h1>

      {wishlistItems.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <WishlistList wishlistItems={wishlistItems} />
      )}
    </section>
  );
}

export default Wishlist;