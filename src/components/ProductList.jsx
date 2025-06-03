import { useContext } from "react";
import Product from "./Product";
import { CartContext } from "../context/CartContext";

export default function ProductList() {
  const { products, cart } = useContext(CartContext)
  return (
    <>
        <div className="grid grid-cols-3 gap-5 mt-10">
            {products.map(product => {
                const itemInCart = cart.find(item => item.id === product.id)
                const cantidad = itemInCart ? itemInCart.cantidad : 0
                return (
                    <Product
                      key={product.id}
                      product={{...product, cantidad}}  
                    />
                )
            })}   
        </div>
    </>
  )
}
