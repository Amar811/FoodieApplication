import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 border-b pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.quantity}
                </p>
              </div>

              <div className="text-right">
                <p className="text-green-700 font-semibold">
                  ₹{item.price * item.quantity}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 text-black rounded-l"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 text-black rounded-r"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="mt-6 text-right">
          <h3 className="text-lg font-bold">
            Total: ₹
            {cartItems.reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            )}
          </h3>
          <Link to="/checkout">
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
