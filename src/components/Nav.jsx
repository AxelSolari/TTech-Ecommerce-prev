import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
export default function Nav() {

  const { cart, setCartOpen} = useContext(CartContext)
  const { isAuthenticated, logOut } = useContext(AuthContext) 

  const role = localStorage.getItem('role')
  return (
    <nav>
        <ul className="flex gap-6 justify-between text-fuchsia-800 text-lg">
            <li className=" cursor-pointer hover:text-fuchsia-400 relative group">
              <Link to='/'>Inicio</Link> 
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className=" cursor-pointer hover:text-fuchsia-400 relative group">
                <Link to='/productos'>Productos</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className=" cursor-pointer hover:text-fuchsia-400 relative group">
              <Link to='/nosotros'>Nosotros</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className=" cursor-pointer hover:text-fuchsia-400 relative group">
              <Link to='/contacto'>Contacto</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 group-hover:w-full group-hover:transition-all"></span>
            </li>
            <li className="relative  group">
                
                <button 
                  className="relative cursor-pointer hover:text-fuchsia-400 group flex items-center gap-2"
                  onClick={() => setCartOpen(true)}
                  >
                    Mi Carrito:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 group-hover:w-full group-hover:transition-all"></span>
                    {cart.length ? (<p className="text-white bg-red-700 rounded-t-lg text-xs absolute -top-2 -right-2 px-[2px]">{cart.length}</p>) : '' }
                </button>
            </li>
                  {isAuthenticated && role ==='admin' && (
                    <div className="flex gap-6 ">
                      <li className=" cursor-pointer hover:text-fuchsia-400 relative group">
                        <Link to='/admin'>Panel de Control</Link>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 group-hover:w-full group-hover:transition-all"></span>  
                      </li>
                    </div>
                  )}
                  
            <li className=" cursor-pointer hover:text-fuchsia-400 relative group ">
              <Link to='/login' onClick={logOut} className="flex items-center gap-1">Cerrar sesion <ArrowLeftStartOnRectangleIcon className="h-6 w-6" /></Link>
              
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-600 group-hover:w-full group-hover:transition-all"></span>
            </li>
        </ul>
    </nav>
  )
}
