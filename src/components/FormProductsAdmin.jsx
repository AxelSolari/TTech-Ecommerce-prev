import { useState } from "react"

export default function FormProductsAdmin({submitProduct}) {

    const [producto, setProducto] = useState({
        name: '',
        image: '',
        description: '',
        price: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setProducto({...producto, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        submitProduct(producto)
        setProducto({
            name: '',
            image: '',
            description: '',
            price: ''
        })
    }

  return (
      <div>
          <h1 className="text-center text-2xl mt-5">Agrega un nuevo producto a la tienda</h1>

          <div>
              <form 
                className="w-1/3 bg-gray-300 mx-auto mt-5 p-5 rounded space-y-5 shadow-lg"
                onSubmit={handleSubmit}
                >
                  <input
                      type="text"
                      placeholder="Nombre del Producto"
                      className="bg-white w-full py-1 px-2 rounded outline-0 focus:ring-1 focus:ring-fuchsia-500 transition-all"
                      name="name"
                      value={producto.name}
                      required
                      onChange={handleChange}
                  />
                
                  <input
                      type="text"
                      placeholder="Imagen del Producto/URL"
                      className="bg-white w-full py-1 px-2 rounded outline-0 focus:ring-1 focus:ring-fuchsia-500 transition-all"
                      name="image"
                      value={producto.image}
                      required
                      onChange={handleChange}
                  />
              
                  <input
                      type="number"
                      placeholder="Precio del Producto"
                      className="bg-white w-full py-1 px-2 rounded outline-0 focus:ring-1 focus:ring-fuchsia-500 transition-all"
                      name="price"
                      value={producto.price}
                      required
                      onChange={handleChange}
                  />
                
                  <textarea
                      type="text"
                      placeholder="Descripcion del Producto"
                      className="bg-white w-full py-1 px-2 rounded outline-0 focus:ring-1 focus:ring-fuchsia-500 transition-all"
                      name="description"
                      value={producto.description}
                      required
                      onChange={handleChange}
                  />
                  

                  <button
                      type="submit"
                      className="block mx-auto py-1 px-3 font-semibold shadow-md bg-white rounded-lg hover:ring-1 hover:ring-fuchsia-500 cursor-pointer transition-all"
                      
                  >
                      Agregar nuevo producto
                  </button>
              </form>
          </div>
      </div>
  );
}
