import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const { user } = useAuth();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total,
      date: new Date().toLocaleString(),
    };

    //Get user key
    const userKey = user?.username || "guest";

    //save to localstorage
    const key = `orders_${userKey}`;
    const existingOrders = JSON.parse(localStorage.getItem(key)) || [];
    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem(key, JSON.stringify(updatedOrders));

    // alert("🎉 Order placed successfully!");
    clearCart();
    navigate("/thank-you", { state: { order: newOrder } });

  };

 const handleFakePayment = () => {
  const confirmed = window.confirm("Proceed with Payment");
  if (confirmed) {
    handlePlaceOrder();
  }
};


  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

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

              <p className="text-green-700 font-semibold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}

          <hr />
          <div className="text-right font-bold text-lg">Total: ₹{total}</div>
          <button
            onClick={handleFakePayment}
            className="mt-4 w-full bg-green-600 text-white py-2 rounded"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
