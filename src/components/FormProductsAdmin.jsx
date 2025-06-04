
export default function FormProductsAdmin() {
  return (
    <div>
        <h3 className="text-center text-2xl mt-5">Registro de Productos</h3>

        <div>
            <form className="w-1/3 bg-gray-300 mx-auto mt-5 p-5 rounded space-y-5 shadow-lg">
                <input 
                    type="text"
                    placeholder="Nombre del Producto"
                    className="bg-white w-full py-1 px-2 rounded outline-0 focus:ring-1 focus:ring-fuchsia-500 transition-all"
                />
                <input 
                    type="text"
                    placeholder="Precio del Producto"
                    className="bg-white w-full py-1 px-2 rounded outline-0 focus:ring-1 focus:ring-fuchsia-500 transition-all"
                />

                <button
                    type="submit"
                    className="block mx-auto py-1 px-3 font-semibold shadow-md bg-white rounded-lg hover:ring-1 hover:ring-fuchsia-500 cursor-pointer transition-all"
                >
                    Agregar
                </button>
            </form>
        </div>
    </div>
  )
}
