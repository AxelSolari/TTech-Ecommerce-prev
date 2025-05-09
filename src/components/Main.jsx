import React from 'react'
import mainF from '../../public/main.jpg'
export default function Main() {
  return (
    <main className='shadow-lg mt-2'>
        <div className=' w-full h-[500px] overflow-hidden'>
            <img 
                src={mainF}
                className='w-full h-full object-cover brightness-50'
            />
        </div>
        <div className='w-1/2 mx-auto my-5 p-2'>
            <h2 className='text-4xl border-b text-center mb-5'>E-Commerce</h2>
            <p className='text-center font-bold text-fuchsia-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur aperiam dolores quod iusto sequi, voluptatem vero perspiciatis laudantium molestias dicta nesciunt cupiditate soluta, dolorem temporibus quos maxime aliquam error.</p>
        </div>
    </main>
  )
}
