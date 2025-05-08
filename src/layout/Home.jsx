import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ProductList from "../components/ProductList";


export default function Home({products, cart, addToCart, handleDecreaseQuantity}) {
  return (
    <>
        <Header />
        <Main />
        <ProductList 
            products={products} 
            addToCart={addToCart}
            handleDecreaseQuantity = {handleDecreaseQuantity}
            cart={cart}
        />
        <Cart 
            cart={cart}
        />
        <Footer />
    </>
  )
}
