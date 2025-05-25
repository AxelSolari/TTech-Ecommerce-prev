
export default function Login() {
  return (
    <>
      <div className=" h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl text-center">Inicia sesion</h1>

        <form 
          className="bg-fuchsia-400 shadow-lg flex flex-col space-y-5 p-7 mt-10 w-1/4 rounded-lg"

        > 
          <input 
            type="email"
            placeholder="Email"
            className="p-2 bg-white rounded outline-0"
          />
          <input 
            type="email"
            placeholder="Password"
            className="p-2 bg-white rounded outline-0"
          />
          
          <button
            className="bg-white py-1 w-1/3 mx-auto rounded font-semibold text-slate-600 cursor-pointer hover:ring-2 hover:ring-fuchsia-700"
          >Iniciar Sesion</button>
        </form>
      </div>
    </>
  )
}
