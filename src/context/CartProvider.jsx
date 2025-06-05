import {  useState, useEffect } from "react";
import { CartContext } from "./CartContext";
const url = 'https://684089405b39a8039a586600.mockapi.io/api/products'
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  
  const [isLoading, setIsLoading] = useState(false)
  //#fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch(url)
          // console.log(response)
          const data = await response.json()
          // console.log(data)
          setProducts(data)
          setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    fetchData()
  },[])

   const reloadList = async() => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }

  //#addToCart
  const handleAdToCart =(product) => {
    const productExist = cart.find( item => item.id === product.id )

    if(productExist) {
      setCart(
        cart.map( item => 
          item.id === product.id ? {...item, cantidad: item.cantidad + 1} 
          : item
        )
      )
    } else {
      setCart([...cart, {...product, cantidad: 1}])
    }
  }

  //#decreaseQuantity
  const handleDecreaseQuantity = (product) => {
    const productExist = cart.find( (item) => item.id === product.id)
    if(productExist.cantidad === 1) {
      setCart(cart.filter((item) => item.id !== product.id))
    } else { 
      setCart(
        cart.map((item) => item.id === product.id ? {...item, cantidad: item.cantidad - 1} : item)
      )
    }
  }

  //#deleteItem
  const deleteItem = (product) => {
    const productExist = cart.find((item) => item.id === product.id)
    if(productExist) {
      setCart(cart.filter((item) => item.id !== product.id))
    }
  }

  //#clearCart
  const clearCart = () => {
    setCart([])
  }

    return (
        <CartContext.Provider value={{cart, products, cartOpen, isLoading, handleAdToCart, handleDecreaseQuantity, deleteItem, clearCart, setCartOpen, reloadList}}>
            {children}
        </CartContext.Provider>
    )
}