import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./layout/Home"
import { useEffect, useState } from "react"
import ProductsViews from "./layout/ProductsViews"
import ProductDetails from "./components/ProductDetails"
import NotFound from "./components/NotFound"
import Login from "./layout/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import AdminPanel from "./layout/AdminPanel"
import Nosotros from "./layout/Nosotros"
import Contacto from "./layout/Contacto"

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(true)
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
    <>
      <Router>
        <Routes>
          <Route path="/" 
            element={<Home 
              products={products}
              cart={cart}
              addToCart={handleAdToCart}
              handleDecreaseQuantity={handleDecreaseQuantity}
              deleteItem={deleteItem}
              clearCart={clearCart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              isLoading={isLoading}
            />} 
          />
          <Route path="/productos" 
            element={<ProductsViews 
              cart={cart} 
              setCartOpen={setCartOpen} 
              cartOpen={cartOpen} 
              products={products} 
              addToCart={handleAdToCart} 
              handleDecreaseQuantity={handleDecreaseQuantity} 
              deleteItem={deleteItem}
              clearCart={clearCart}
            />} 
          />
          <Route path="/nosotros"
            element={<Nosotros 
              cart={cart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              clearCart={clearCart}
              deleteItem={deleteItem}
            />}
          />
          <Route path="/contacto"
            element={<Contacto 
              cart={cart}
              cartOpen={cartOpen}
              setCartOpen={setCartOpen}
              clearCart={clearCart}
              deleteItem={deleteItem}
            />} 
          />
          <Route path="/products/:id"
            element={<ProductDetails products={products} />} 
          />
          <Route path="/notfound"  element={<NotFound />}/>
          <Route path="/login"   element={<Login />}/>
          <Route path="/admin" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminPanel /></ProtectedRoute> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
