import { createContext, useContext, useState } from "react";

// Create context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (food) => {
    const existing = cartItems.find((item) => item.id === food.id);
    if (existing) {
      increaseQuantity(food.id);
    } else {
      setCartItems((prev) => [...prev, { ...food, quantity: 1 }]);
    }
  };

   const increaseQuantity = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,
     clearCart,increaseQuantity,decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
