import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./layout/Home"
import { useContext } from "react"
import ProductsViews from "./layout/ProductsViews"
import ProductDetails from "./components/ProductDetails"
import NotFound from "./components/NotFound"
import Login from "./layout/Login"
import ProtectedRoute from './utils/ProtectedRoute'
import AdminPanel from "./layout/AdminPanel"
import Nosotros from "./layout/Nosotros"
import Contacto from "./layout/Contacto"
import { AuthContext } from "./context/AuthContext"

function App() {
  
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <>
        <Routes>
          <Route path="/" 
            element={<Home />} 
          />
          <Route path="/productos" 
            element={<ProductsViews />} 
          />
          <Route path="/nosotros"
            element={<Nosotros />}
          />
          <Route path="/contacto"
            element={<Contacto />} 
          />
          <Route path="/products/:id"
            element={<ProductDetails />} 
          />
          <Route path="/notfound"  element={<NotFound />}/>
          <Route path="/login"   element={<Login />}/>
          <Route path="/admin" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AdminPanel /></ProtectedRoute> } />
        </Routes>
    </>
  )
}

export default App
