import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [role, setRole] = useState('')
    const navigate = useNavigate();

    useEffect(()=> {
        const isAuthenticated = localStorage.getItem('isAuth') === 'true'
        const userRole = localStorage.getItem('role') || ''

        if(isAuthenticated){
            setIsAuthenticated(true)
            setRole(userRole)
            if(userRole === 'admin'){
                navigate('/admin')
            } else if (userRole === 'client'){
                navigate('/')
                } 
            } else {
                navigate('/login')
            }
        }, [])

    const logOut = () => {
        localStorage.removeItem('isAuth')
        localStorage.removeItem('role')
        setIsAuthenticated(false)
        setEmail('')
        setPassword('')
        navigate('/login')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errorMessage = {};
        if (!email) {
            errorMessage.email = "El Email es obligatorio";
        }
        if (!password) {
            errorMessage.password = "El Password es obligatorio";
        }

        if (Object.keys(errorMessage).length > 0) {
            setError(errorMessage);
            return;
        }
        try {
            const res = await fetch("/db/user.json");
            const users = await res.json();

            const userExists = users.find(
                (user) => user.email === email && user.password === password
            );

            if (!userExists) {
                setError({ invalidCred: "Credenciales no validas" });

                setTimeout(() => {
                    setError({ invalidCred: "" });
                }, 3000);
            } else {
                
                if (userExists.role === "admin") {
                    setIsAuthenticated(true);
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('role', userExists.role)
                    navigate("/admin");
                } else {
                    userExists.role === 'client'
                    setIsAuthenticated(true)
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('role', userExists.role)
                    navigate("/");
                }
            }
        } catch {
            setError({ email: "Ha ocurrido un error, intentalo de nuevo" });
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (error.email) {
            setError((prev) => ({ ...prev, email: "" }));
        }
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (error.password) {
            setError((prev) => ({ ...prev, password: "" }));
        }
    };


    return (
        <AuthContext.Provider  value={{email, setEmail, password, setPassword, error, setError, handleSubmit, handleEmailChange, handlePasswordChange, isAuthenticated, setIsAuthenticated, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}