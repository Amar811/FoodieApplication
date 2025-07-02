import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <>
      <div className="bg-gray-800 text-white p-4 flex justify-between">
        <Link to="/" className="text-xl font-bold">
          FoodCart
        </Link>
        <Link to="/cart" className="bg-green-500 px-3 py-1 rounded">
          Cart ({cartItems.length})
        </Link>
      </div>
    </>
  );
};

export default Navbar;
