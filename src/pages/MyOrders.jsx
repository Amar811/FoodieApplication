import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("Please login to view your orders");
      navigate("/login");
      return;
    }
    const userKey = user?.username ;
    const key = `orders_${userKey}`;
    const stored = localStorage.getItem(key);
    if (stored) setOrders(JSON.parse(stored));
  }, [user,navigate]);

  const handleReorder = (items) => {
    items.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        addToCart(item); // add multiple times to match quantity
      }
    });
    alert("Items added to cart!");
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">🧾 My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="border rounded p-4 mb-4 bg-white shadow"
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">{order.date}</span>
              <span className="font-bold text-green-700">₹{order.total}</span>
            </div>

            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b py-2"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            ))}

            <button
              onClick={() => handleReorder(order.items)}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reorder
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;
