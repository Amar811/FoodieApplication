import React, { useState, useEffect } from "react";

function Admin() {
  const [foodData, setFoodData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("foods");
    if (stored) setFoodList(JSON.parse(stored));
  }, []);

  const handleChange = (e) => {
    setFoodData({ ...foodData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!foodData.name || !foodData.price) {
      alert("Name and Price are required!");
      return;
    }
    const newFood = { ...foodData, id: Date.now() };
    const updatedList = [...foodList, newFood];
    setFoodList(updatedList);
    localStorage.setItem("foods", JSON.stringify(updatedList));
    setFoodData({ name: "", description: "", price: "", image: "" });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Food Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={foodData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={foodData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={foodData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={foodData.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Food
        </button>
      </form>

      <h3 className="text-lg font-bold mt-8 mb-4">Current Food Items</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {foodList.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <img
              src={item.image || "https://via.placeholder.com/150"}
              alt={item.name}
              className="h-32 w-full object-cover mb-2"
            />
            <h4 className="font-bold">{item.name}</h4>
            <p>{item.description}</p>
            <p className="text-green-600 font-semibold">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
