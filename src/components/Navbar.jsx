import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-800 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">FoodCart</h1>
        <div>
          <button className="bg-green-500 px-3 py-1">Cart</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
