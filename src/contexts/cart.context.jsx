import { createContext, useEffect, useState } from "react";

const addToCart = (cartItems, productToAdd) => {
  const cartItemFound = cartItems.find((item) => item.id === productToAdd.id);

  if (cartItemFound) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartItemCount(count);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addToCart(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartItemCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
