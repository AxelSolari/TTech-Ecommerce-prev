
export default function Cart({cart}) {
    const cartItems = cart
    console.log(cartItems)
  return (
    <div className="fixed top-0 right-0 w-[300px] h-full bg-white shadow-lg transform translate-x[100%] transition-transform z-50 overflow-y-auto text-center">
        <div>
            <h2>Mi Carrito</h2>
            <button>X</button>
        </div>
        <div>
            <ul>
                <li>
                    
                </li>
            </ul>
        </div>
        <button>Vaciar Carrito</button>
    </div>
  )
}
