import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  function add(item) {
    setCart([...cart, item]);
  }

  function remove(id) {
    setCart(cart.filter(i => i.id !== id));
  }

  function total() {
    return cart.reduce((t, i) => t + i.price, 0);
  }

  return { cart, add, remove, total };
}
