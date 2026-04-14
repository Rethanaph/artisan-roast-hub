import { useState, useCallback } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  weight: string;
}

let globalCart: CartItem[] = [];
let listeners: Array<() => void> = [];

function notify() {
  listeners.forEach((l) => l());
}

export function getCart() {
  return globalCart;
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const existing = globalCart.find((i) => i.id === item.id);
  if (existing) {
    globalCart = globalCart.map((i) =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  } else {
    globalCart = [...globalCart, { ...item, quantity: 1 }];
  }
  notify();
}

export function removeFromCart(id: string) {
  globalCart = globalCart.filter((i) => i.id !== id);
  notify();
}

export function updateQuantity(id: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(id);
    return;
  }
  globalCart = globalCart.map((i) => (i.id === id ? { ...i, quantity } : i));
  notify();
}

export function clearCart() {
  globalCart = [];
  notify();
}

export function getCartTotal() {
  return globalCart.reduce((sum, i) => sum + i.price * i.quantity, 0);
}

export function getCartCount() {
  return globalCart.reduce((sum, i) => sum + i.quantity, 0);
}

export function useCart() {
  const [, setTick] = useState(0);

  const subscribe = useCallback(() => {
    const listener = () => setTick((t) => t + 1);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  // Subscribe on mount
  useState(() => {
    const unsub = subscribe();
    return unsub;
  });

  return {
    items: getCart(),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total: getCartTotal(),
    count: getCartCount(),
  };
}
