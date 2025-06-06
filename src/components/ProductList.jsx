import { useContext } from "react";
import Product from "./Product";
import { CartContext } from "../context/CartContext";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
export default function ProductList() {
  const {  cart,  search, setSearch, productsFilter} = useContext(CartContext)

  
  return (
    <> 
        <div className="flex justify-center">
          <div className="flex items-center justify-center p-1 rounded  gap-2 border border-fuchsia-600 w-1/7 ">
            <MagnifyingGlassIcon className="w-6 h-6 " />
            <input 
              type="text"
              placeholder="Buscar producto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-0 p-1"
            />
          </div>

        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
            {productsFilter.map(product => {
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
