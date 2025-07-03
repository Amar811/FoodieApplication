import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';

function Home() {
  const [foods, setFoods] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const storedFoods = localStorage.getItem('foods');
    if (storedFoods) {
      setFoods(JSON.parse(storedFoods));
    }
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {foods.length === 0 ? (
        <p>No food items available. Ask admin to add.</p>
      ) : (
        foods.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <img src={item.image || "https://via.placeholder.com/200"} alt={item.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-bold mt-2">{item.name}</h2>
            <p className="text-sm">{item.description}</p>
            <p className="text-green-600 font-semibold mt-1">₹{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
