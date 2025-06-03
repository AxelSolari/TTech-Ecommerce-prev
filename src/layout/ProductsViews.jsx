import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

export default function ProductsViews() {
  return (
    <>  
        <Header />
        <h2 className="text-center text-3xl mt-5">Lista de productos disponibles</h2>
        <ProductList />
        <Cart />

        <Footer />
    </>
  )
}
