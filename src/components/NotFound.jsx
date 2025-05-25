import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div className="bg-white h-dvh left-[30%] top-[40%] absolute">
        <h1 className="text-5xl text-center text-fuchsia-600 mb-5">ERROR 404 / Pagina no encontrada</h1>
        <Link 
            to={'/'}
            className="text-lg"
        >
            Volver al <span className="font-semibold text-fuchsia-700">inicio</span>
        </Link>
    </div>
  )
}
