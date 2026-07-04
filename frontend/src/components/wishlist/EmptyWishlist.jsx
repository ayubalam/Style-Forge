import { Link } from "react-router-dom";

function EmptyWishlist() {
  return (
    <div className="text-center py-24">
      <h2 className="text-4xl font-bold">
        Your Wishlist is Empty
      </h2>

      <p className="text-gray-500 mt-4">
        Save your favorite products here.
      </p>

      <Link
        to="/products"
        className="inline-block mt-8 bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition"
      >
        Browse Products
      </Link>
    </div>
  );
}

export default EmptyWishlist;