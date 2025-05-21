import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";

export default function ProductsViews({cart, setCartOpen, cartOpen, products, addToCart, handleDecreaseQuantity, deleteItem, clearCart}) {
  return (
    <>  
        <Header 
            cartOpen={cartOpen} 
            cart={cart} 
            setCartOpen={setCartOpen}
        />

        <h2 className="text-center text-3xl mt-5">Lista de productos disponibles</h2>
        <ProductList 
            products={products} 
            addToCart={addToCart} 
            handleDecreaseQuantity={handleDecreaseQuantity} 
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
