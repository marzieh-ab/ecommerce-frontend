import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  //  const defaultProduct=ls?JSON.parse(ls.getItem('cart')):[]

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }else{
      ls.removeItem("cart")
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId) {
    const products = [...cartProducts];
  
    const newProIndex = products.indexOf(productId);
   
    if (newProIndex !== -1) {
      let newCart = products.filter((value, index) => index !== newProIndex);
      setCartProducts(newCart);
    }
  }

  function clearCart() {
    setCartProducts([]);
  }

  console.log(cartProducts.length,"ppppp")

  return (
    <CartContext.Provider
      value={{ cartProducts, setCartProducts, addProduct, removeProduct,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
