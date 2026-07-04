import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-pink-500"
        >
          STYLE-FORGE
        </Link>

        <ul className="flex gap-8 font-medium">
          <li>
            <Link to="/" className="hover:text-pink-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/products" className="hover:text-pink-500 transition">
              Products
            </Link>
          </li>

          <li>
            <Link to="/cart" className="hover:text-pink-500 transition">
              Cart
            </Link>
          </li>

          <li>
            <Link to="/wishlist" className="hover:text-pink-500 transition">
              Wishlist
            </Link>
          </li>

          <li>
            <Link to="/login" className="hover:text-pink-500 transition">
              Login
            </Link>
          </li>

          <li>
            <Link to="/register" className="hover:text-pink-500 transition">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;