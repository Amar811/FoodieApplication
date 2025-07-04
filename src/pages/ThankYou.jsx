import React from "react";
import { Link, useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const order = location.state?.order;

  return (
    <>
      {order ? (
        <div className="border p-4 rounded shadow max-w-2xl mx-auto mt-6 bg-white">
          <h3 className="text-xl font-bold mb-4">🧾 Invoice Summary</h3>
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}
          <hr className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>₹{order.total}</span>
          </div>
          <p className="text-sm text-gray-500 mt-2">Order Date: {order.date}</p>

          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Go Back to Home
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No order to show.</p>
      )}
    </>
  );
};

export default ThankYou;
