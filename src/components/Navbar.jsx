import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
 console.log("Logged in user:", user);

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        FoodCart
      </Link>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span>Hello, {user.username}</span>
            <Link to="/cart" className="bg-green-500 px-3 py-1 rounded">
              Cart ({cartItems.length})
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">
              Login
            </Link>
            <Link to="/register" className="bg-yellow-500 px-3 py-1 rounded">
              Register
            </Link>
            {user?.username === "admin" && (
              <Link to="/admin" className="bg-yellow-600 px-3 py-1 rounded">
                Admin
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
