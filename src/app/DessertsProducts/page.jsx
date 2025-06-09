// src/app/client-home/page.jsx
"use client";
import CartContextProvider from "@/components/Context/AuthContext/CartContext";
import DessertsProducts from "@/components/DessertsProducts/DessertsProducts";

export default function ClientHome() {

  return (
    <div>
      
      <DessertsProducts />
     
    </div>
  );
}