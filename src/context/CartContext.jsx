import { createContext, useState, useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  //#fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch('../db/db.json')
          const data = await response.json()
          // console.log(data.db)
          setProducts(data.db)
          setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
    fetchData()
  },[])

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
        <CartContext.Provider value={{cart, products, cartOpen, isAuthenticated, isLoading}}>
            {children}
        </CartContext.Provider>
    )
}