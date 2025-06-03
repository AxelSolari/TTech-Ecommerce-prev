import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Nosotros() {
  return (
    <>
        <Header />

        <h2 className="text-center text-4xl my-7">Sobre nuestra empresa</h2>

        <div className="flex p-10 justify-center items-center gap-10"> 
            <div>
            <div className="border border-b-slate-700 my-5"></div>
            <p className="text-center italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit tempore quia consectetur maiores, quasi magnam quos numquam nesciunt. Neque ipsum fugit rem adipisci accusamus alias. Nisi sit recusandae quasi.            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cupiditate dicta cumque ducimus nesciunt, sed modi impedit suscipit excepturi corporis officiis, ab labore reiciendis eligendi obcaecati dolore consequuntur, quos ut.
            </p>
            <p className="text-center italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit tempore quia consectetur maiores, quasi magnam quos numquam nesciunt. Neque ipsum fugit rem adipisci accusamus alias. Nisi sit recusandae quasi.            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur cupiditate dicta cumque ducimus nesciunt, sed modi impedit suscipit excepturi corporis officiis, ab labore reiciendis eligendi obcaecati dolore consequuntur, quos ut.
            </p>
            <div className="border border-b-slate-700 my-5"></div>
            </div>
            <img className=" w-[600px] rounded-lg" src='/us.jpg'  alt="sobre nosotros"/>
        </div>

        <Cart /> 
           
        <Footer/>
    </>
  )
}
