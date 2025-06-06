import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contacto() {
  return (
    <>
        <Header />
        
        <h3 className="text-4xl text-center my-7">Contactanos</h3>
        <div className="my-20">
            <form
                className="bg-white flex flex-col w-1/3 mx-auto p-10 space-y-5 shadow-xl mb-10 rounded-lg"
                noValidate
            >
                <label className="text-lg ">
                    Email
                </label>
                <input  
                    className="p-2 border border-fuchsia-700 rounded-lg"
                    type="email"
                    placeholder="Ingresa tu email"
                />
                <label className="text-lg">
                    Comentario
                </label>
                <textarea  
                    className="p-2 border border-fuchsia-700 rounded-lg"
                    type="text"
                    placeholder="Escribe un comentario"
                />

                <button className="py-2 bg-fuchsia-600 rounded-lg text-white text-lg w-1/2 mx-auto cursor-pointer hover:bg-fuchsia-500 transition-all ">Enviar</button>
            </form>
        </div>
        <Cart />
        
        <Footer />
    </>
  )
}
