import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./authContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [Carts, setCarts] = useState(() => {
    const cart = localStorage.getItem("cart");
    if (user) {
      return JSON.parse(cart);
    }
    return null;
  });

  const createCart = async () => {
    try {
      if (Carts) return;
      if (!user.user.id) throw new Error("User not available");

      const res = await fetch("http://localhost:3000/carts", {
        method: "POST",
        body: JSON.stringify({
          userId: user.user.id,
          date: new Date(),
          products: [],
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();

      localStorage.setItem("cart", JSON.stringify(json));
      setCarts(json);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadCarts = async () => {
    try {
      const response = await fetch("http://localhost:3000/carts");
      if (!response.ok) {
        throw new Error("Failed to fetch carts");
      }
      const data = await response.json();
      setCarts(data);
    } catch (error) {
      console.error("Error loading carts:", error);
    }
  };

  const addProductToCart = async (cart) => {
    try {
      // Now proceed with adding the cart to your database
      const response = await fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Failed to add cart");
      }

      const data = await response.json();
      setCarts([...Carts, data]);
    } catch (error) {
      console.error("Error adding cart:", error);
    }
  };

  const updateProductToCart = async (cart) => {
    try {
      const response = await fetch(`http://localhost:3000/carts/${cart.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Failed to update cart");
      }
      const data = await response.json();
      setCarts(Carts.map((p) => (p.id === cart.id ? data : p)));
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const deleteProductToCart = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/carts/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("Error deleting cart:", error);
    }
  };

  useEffect(() => {
    createCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        Carts,
        loadCarts,
        addProductToCart,
        updateProductToCart,
        deleteProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
