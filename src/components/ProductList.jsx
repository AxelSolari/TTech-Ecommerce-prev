import Product from "./Product";

export default function ProductList({products, addToCart, handleDecreaseQuantity, cart}) {
  return (
    <>
        <h2 className="text-center font-bold text-3xl mt-10">Algunos de nuestros productos</h2>
        <div className="grid grid-cols-3 gap-5 mt-10">
            {products.map(product => {
                const itemInCart = cart.find(item => item.id === product.id)
                const cantidad = itemInCart ? itemInCart.cantidad : 0
                return (
                    <Product product={{...product, cantidad}} key={product.id} addToCart={addToCart} handleDecreaseQuantity={handleDecreaseQuantity} cart={cart}/>
                )
            })}   
        </div>
    </>
  )
}
