import { useNavigate, useParams } from "react-router-dom"
import back from '/back.svg'
import NotFound from "./NotFound";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function ProductDetails() {
    
    const { products } = useContext(CartContext)

    const { id } = useParams()
    const productos = products.find( item => item.id === id) 
    const navigate = useNavigate();
  return (
    <>
        {productos ? (
                <div className="block mx-auto w-1/3 mt-10 p-10 rounded-lg shadow-xl bg-white">
                    <h1 className="text-center text-3xl">Detalles del producto:</h1>

                    <h3 className="text-2xl font-bold my-5">{productos.name}</h3>
                        
                    <img className="w-[400px] h-[300px] object-cover mx-auto rounded-lg" src={`${productos.image}.jpg`} alt="Imagen del producto" /> 
                    <p className="my-5 font-semibold">{productos.description}</p>
                    <h4 className="text-lg font-bold">Caracteristicas</h4>
                    <div>
                        <p className="text-sm">
                            Nombre del modelo: <span className="font-semibold">{productos.name}</span>
                        </p>
                        <p className="text-sm">
                            Color: <span className="font-semibold">Azul Cielo</span>
                        </p>
                        <p className="text-sm">
                            Tamaño de la memoria RAM instalada:	<span className="font-semibold">16 GB</span>
                        </p>
                        <p className="text-sm">
                            Características especiales:	<span className="font-semibold">Ligera, Lector de huellas digitales, Teclado retroiluminado</span>
                        </p>
                    </div>
                    <button 
                        onClick={() => navigate(-1)}
                        className="py-2 bg-fuchsia-700 mt-5 rounded-lg text-white uppercase text-sm px-3 cursor-pointer hover:bg-fuchsia-500 flex items-center"><img src={back} />
                    Volver</button>

                </div>
                )
                : <NotFound />}
    </>
  )
}
