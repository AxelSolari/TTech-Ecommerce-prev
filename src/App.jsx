import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./layout/Home"
import { useContext, useEffect, useState } from "react"
import ProductsViews from "./layout/ProductsViews"
import ProductDetails from "./components/ProductDetails"
import NotFound from "./components/NotFound"
import Login from "./layout/Login"
import ProtectedRoute from './utils/ProtectedRoute'
import AdminPanel from "./layout/AdminPanel"
import Nosotros from "./layout/Nosotros"
import Contacto from "./layout/Contacto"
import { CartContext } from "./context/CartContext"

function App() {
  
  const {cart, products, cartOpen, isAuthenticated, isLoading } = useContext()

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
