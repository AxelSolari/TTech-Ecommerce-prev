import { useContext } from "react";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ProductList from "../components/ProductList";
import { BeatLoader } from "react-spinners";
import { CartContext } from "../context/CartContext";

export default function Home() {

  const { isLoading } = useContext(CartContext)

  return (
    <>
        <Header />
        <Main />

        {isLoading ? <div className="flex flex-col items-center justify-center"><BeatLoader  color="#9800a0" speedMultiplier={0.5} size={40} /><p className="text-2xl text-fuchsia-600 mt-5">Cargando Productos...</p></div> : 
        
          <ProductList />
        
        }
        <Cart />
        <Footer />
    </>
  )
}
