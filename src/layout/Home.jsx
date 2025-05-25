import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ProductList from "../components/ProductList";
import { BeatLoader } from "react-spinners";

export default function Home({products, cart, addToCart, handleDecreaseQuantity, deleteItem, clearCart, cartOpen, setCartOpen, isLoading}) {
  return (
    <>
        <Header 
          cart={cart}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
        <Main />

        {isLoading ? <div className="flex flex-col items-center justify-center"><BeatLoader  color="#9800a0" speedMultiplier={0.5} size={40} /><p className="text-2xl text-fuchsia-600 mt-5">Cargando Productos...</p></div> : 
        
          <ProductList 
              products={products} 
              addToCart={addToCart}
              handleDecreaseQuantity = {handleDecreaseQuantity}
              cart={cart}
          />
        
        }
        <Cart   
            deleteItem={deleteItem}
            cart={cart}
            clearCart={clearCart}
            cartOpen={cartOpen}
            setCartOpen={setCartOpen}
        />
        <Footer />
    </>
  )
}
