import React from 'react'
import logo from '../assets/logo.png'
import Nav from './Nav'
export default function Header({cart, cartOpen, setCartOpen}) {
  return (
    <>  
      <header className='w-full py-2 bg-white shadow'>
        <div className='flex items-center'>
            <img 
              src={logo} 
              className='w-28 h-28'
            />
            <div className='mx-auto w-1/2'>
              <Nav 
                cart={cart}
                cartOpen={cartOpen}
                setCartOpen={setCartOpen}
              />
            </div>
        </div>
      </header>

    </>
  )
}
