import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Login() {
  
  const  { email, password,  error,  handleSubmit, handleEmailChange, handlePasswordChange } = useContext(AuthContext)

  return (
    <>
      <div className=" h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl text-center">Inicia sesion</h1>

        <form 
          className="bg-fuchsia-400 shadow-lg flex flex-col space-y-5 p-7 mt-10 w-1/4 rounded-lg"
          onSubmit={handleSubmit}

        > 
          {error.invalidCred && (
            <div className="text-white p-1 w-full bg-red-600 rounded-lg text-center font-semibold">
              {error.invalidCred}
            </div>
          )}

          <label className="text-white underline">
            Email de registro
          </label>
          <input 
            type="email"
            placeholder="Email"
            className="p-2 bg-white rounded outline-0"
            value={email}
            onChange={handleEmailChange}
          />
          {error.email && (
            <div className="text-white p-1 w-full bg-red-600 rounded-lg text-center font-semibold">
              {error.email}
            </div>
          )}
          <label className="text-white underline">
            Password de registro
          </label>
          <input 
            type="password"
            placeholder="Password"
            className="p-2 bg-white rounded outline-0"
            value={password}
            onChange={handlePasswordChange}
          />
          {error.password && (
            <div className="text-white p-1 w-full bg-red-600 rounded-lg text-center font-semibold">
              {error.password}
            </div>
          )}
          
          <button
            type="submit"
            className="bg-white py-1 w-1/3 mx-auto rounded font-semibold text-slate-600 cursor-pointer hover:ring-2 hover:ring-fuchsia-700"
          >Iniciar Sesion</button>
        </form>
      </div>
    </>
  )
}
