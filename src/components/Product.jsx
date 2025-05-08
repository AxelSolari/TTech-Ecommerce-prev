import React from 'react'

export default function Product({product, addToCart, handleDecreaseQuantity}) {

  return (
    <section className=''>
      <div className=' w-[90%] shadow-lg rounded mx-auto'>
        <div className='w-full h-60 overflow-hidden mx-auto p-2'>
        <img 
          src={`/public/${product.image}.jpg`} 
          className='w-full h-full object-cover'
        />

        </div>
        <div className='p-2'>
          <h3 className='font-bold text-xl border-b'>{product.name}</h3>
          <p className='text-sm leading-5 mt-2 text-center'>{product.description}</p>
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
                  onClick={()=> addToCart({...product})}
                >+</button>
              </div>
                <button 
                  className='py-2 bg-fuchsia-600 my-5 block w-1/2 mx-auto rounded text-white font-bold transition-all hover:bg-fuchsia-400 cursor-pointer uppercase'
                  onClick={()=> addToCart({...product, cantidad: 1})}  
                >Comprar</button>

            </div>
        </div>
      </div>
    </section>
  )
}
