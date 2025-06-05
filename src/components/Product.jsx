import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function Product({product}) {

  const  { handleDecreaseQuantity, handleAdToCart } = useContext(CartContext) 
  // console.log(products)
  return (
    <section className=''>
      <div className=' w-[90%] shadow-lg rounded mx-auto'>
        <div className='w-full h-60 overflow-hidden mx-auto p-2'>
        <img 
          src={`${product.image}.jpg`} 
          className='w-full h-full object-cover'
        />

        </div>
        <div className='p-2'>
            <div className='flex justify-between items-center p-2'>
              <h3 className='font-bold text-xl border-b'>{product.name}</h3>
              <Link 
                  to={`/products/${product.id}`}
                  className='py-1 px-2 bg-fuchsia-600 rounded text-white text-sm font-bold transition-all hover:bg-fuchsia-400 cursor-pointer'
              >
              Ver mas</Link>
            </div>
          <p className='text-sm leading-5 mt-2 text-center break-words whitespace-normal'>{product.description}</p>
            <p className='font-bold mt-5 text-center text-lg'>${product.price}</p>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center justify-center gap-2 mt-2'>
                <button 
                  className='px-2 bg-fuchsia-300 rounded font-bold cursor-pointer hover:bg-fuchsia-500 transition-all hover:text-white'
                  onClick={()=> handleDecreaseQuantity(product)}  
                >-</button>
                <span className='font-bold text-sm'>{product.cantidad ?? 0}</span>
                <button 
                  className='px-2 bg-fuchsia-300 rounded font-bold cursor-pointer hover:bg-fuchsia-500 transition-all hover:text-white'
                  onClick={()=> handleAdToCart({...product})}
                >+</button>
              </div>
                  <button 
                    className='py-2 bg-fuchsia-600 my-5 w-1/3 mx-auto rounded text-white font-bold transition-all hover:bg-fuchsia-400 cursor-pointer uppercase flex items-center justify-center gap-2'
                    onClick={()=> handleAdToCart({...product, cantidad: 1})}  
                  >Comprar<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                  </button>
            </div>
        </div>
      </div>
    </section>
  )
}
