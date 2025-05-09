import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ProductList from "../components/ProductList";


export default function Home({products, cart, addToCart, handleDecreaseQuantity, deleteItem, clearCart, cartOpen, setCartOpen}) {
  return (
    <>
        <Header 
          cart={cart}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
        <Main />
        <ProductList 
            products={products} 
            addToCart={addToCart}
            handleDecreaseQuantity = {handleDecreaseQuantity}
            cart={cart}
        />
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
