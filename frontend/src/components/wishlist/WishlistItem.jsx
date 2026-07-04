import { FiHeart, FiShoppingCart } from "react-icons/fi";
import useWishlist from "../../hooks/useWishlist";
import useCart from "../../hooks/useCart";

function WishlistItem({ item }) {
  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = () => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row items-center gap-6">

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-36 h-36 object-cover rounded-xl"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold">
          {item.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {item.category}
        </p>

        <p className="text-pink-500 text-3xl font-bold mt-3">
          ${item.price}
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-3">

        <button
          onClick={handleMoveToCart}
          className="bg-black text-white px-5 py-3 rounded-lg hover:bg-pink-500 transition flex items-center gap-2"
        >
          <FiShoppingCart />
          Move to Cart
        </button>

        <button
          onClick={() => removeFromWishlist(item.id)}
          className="border px-5 py-3 rounded-lg hover:bg-pink-500 hover:text-white transition"
        >
          <FiHeart />
        </button>

      </div>
    </div>
  );
}

export default WishlistItem;