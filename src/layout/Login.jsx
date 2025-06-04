import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export default function Login() {

  const { setIsAuthenticated } = useContext(CartContext)

  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ error, setError ] = useState({})
  const [invalidCred, setInvalidCred] = useState('')
  const navigate = useNavigate()

  const  handleSubmit = async (e) => {
      e.preventDefault()

      let errorMessage = {}
      if(!email) { errorMessage.email = 'El Email es obligatorio'}
      if(!password) { errorMessage.password = 'El Password es obligatorio'}


      if(Object.keys(errorMessage).length > 0 ){
        setError(errorMessage)
        return
      }
      try {
        const res = await fetch('/db/user.json')
        const users = await res.json()
  
        const userExists = users.find((user) => user.email === email && user.password === password)
  
        if(!userExists){
           setError({invalidCred: 'Credenciales no validas'})

          setTimeout(() => {
            setError({invalidCred: ''})

          }, 3000);
        } else {
          if(userExists.role === 'admin') {
            setIsAuthenticated(true)
            navigate('/admin')
          } else {
            navigate('/')
          }
        }
  
      } catch (error) {
        setError({email: 'Ha ocurrido un error, intentalo de nuevo'})
      }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (error.email) {
      setError(prev => ({ ...prev, email: '' }))
    }
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (error.password) {
      setError(prev => ({ ...prev, password: '' }))
    }
  }


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
