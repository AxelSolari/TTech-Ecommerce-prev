
export default function Cart({cart, deleteItem, clearCart, cartOpen, setCartOpen}) {
    const total = cart.reduce((total, item) => total + (item.price * item.cantidad) , 0)

  return (
    <div className={`fixed top-0 right-0 w-[400px] h-[90%] mt-10 bg-neutral-50 rounded-t-lg shadow-lg transform  transition-transform z-50 overflow-y-auto text-center ${cartOpen ? 'translate-x-0' : 'translate-x-full'  }`}>
        <div className="flex items-center justify-center mt-5 gap-5 border-b p-5">
            <h2 className="font-bold text-fuchsia-700 text-lg">Mi Carrito</h2>
            |
            <button 
                className="text-red-800 font-bold text-lg cursor-pointer"
                onClick={() => setCartOpen(false)}
                >Cerrar X</button>
        </div>
        <div className="mt-5">
            {cart.length === 0 ? (
                <p className="text-lg font-semibold italic">El carrito esta vacio</p>
            ) : (
                <ul>
                    {cart.map(item => (

                        <li 
                            key={item.id}
                            className="grid grid-cols-4 space-y-2 border-b items-center p-2 relative"
                        >
                            {/* <div className="grid grid-cols-4"> */}
                                <p className="font-bold ">{item.name} </p><p className="font-semibold">${item.price}</p><p className="font-semibold">Cantidad: <span className="text-fuchsia-700">{item.cantidad}</span></p>
                                <button 
                                    className="cursor-pointer text-red-800 mb-2 hover:text-red-500 absolute right-10"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5"
                                    onClick={() => deleteItem(item)}
                                >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                </button>

                            {/* </div> */}
                        </li>
                    ))}
                    <p className="text-lg mt-5 text-center">Total a pagar: ${total}</p>

                    <div className="flex flex-col w-1/3 mx-auto space-y-3 mt-5">
                        <button className="uppercase bg-green-800 py-1 text-white rounded text-sm hover:bg-green-500 cursor-pointer font-semibold">Pagar</button>
                        <div className="w-full h-[1px] bg-black"></div>
                        <button 
                            className="uppercase bg-fuchsia-800 py-1 text-white rounded text-sm hover:bg-fuchsia-500 cursor-pointer font-semibold"
                            onClick={() => clearCart()}
                        >Vaciar Carrito</button>
                    </div>
                </ul>
            )}
        </div>
        
    </div>
  )
}
