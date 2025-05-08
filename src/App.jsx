import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./layout/Home"
import { useEffect, useState } from "react"

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])


  //#fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
          const response = await fetch('../db/db.json')
          const data = await response.json()
          // console.log(data.db)
          setProducts(data.db)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])

  //#addToCart
  const handleAdToCart =(product) => {
    const productExist = cart.find( product => product.id )

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
  const hadnleDecreaseQuantity = (product) => {
    const productExist = cart.find( item => item.id === product.id)
    if(productExist.cantidad === 1) {
      setCart(cart.filter(item => item.id !== product.id))
    } else { 
      setCart(
        cart.map(item => item.id === product.id) ? {...item, cantidad: item.cantidad - 1} : item
      )
    }
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" 
            element={<Home 
              products={products}
              cart={cart}
              addToCart={handleAdToCart}
              decrease={hadnleDecreaseQuantity}
            />} 
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
