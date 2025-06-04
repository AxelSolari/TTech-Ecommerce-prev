import { UserIcon, ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/solid'
import FormProductsAdmin from '../components/FormProductsAdmin'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import ButtonDelete from '../components/ButtonDelete'
import ButtonEdit from '../components/ButtonEdit'
export default function AdminPanel() {
  
  const { products } = useContext(CartContext)

  const addProduct = async (products) => {
    try {
      const response = await fetch(`https://684089405b39a8039a586600.mockapi.io/api/products`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)

      })
      if(!response.ok){
        throw new Error ('Hubo un problema al agregar el producto')
      }
      const data = await response.json()
      alert('Producto agregado correctamente')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="h-[150px] bg-fuchsia-700 flex items-center justify-around">
        <h2 className="text-white text-3xl text-center">Admin Control Panel</h2>
        <nav className='flex gap-2 items-center w-1/3'>
          <div className='flex items w-full gap-2 justify-center'>
            <UserIcon className=' text-white w-6 h-6' />
            <p className='text-white italic font-semibold'>Admin</p>
          </div>
          <div className='flex items-center w-full gap-2 justify-center'>
            <ArrowLeftStartOnRectangleIcon className='w-6 h-6 text-white'/>
            <p className='text-white italic font-semibold'>Cerrar Sesion</p>
          </div>
        </nav>
      </div>
      <FormProductsAdmin submitProduct={addProduct} />
      
      <ul className='space-y-2 my-10 w-[90%] mx-auto'>
        {products.map(item =>(
        
          <li 
            key={item.id}
            className='flex bg-gray-300 items-center justify-around p-2 rounded'
            >
            <p className='w-15 text-center'>ID: {item.id}</p>
            <p className='w-40 text-center uppercase'>{item.name}</p>
            <p className='w-20  text-center'>${item.price}</p>
            <ButtonDelete />
            <ButtonEdit />
          </li>
          ))}
      </ul>
    </>
  )
}
