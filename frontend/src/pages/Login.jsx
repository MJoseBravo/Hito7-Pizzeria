import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')

    const [error, setError] = useState(false)
    const [envioOk, setEnvioOk] = useState(false)
    const [errorLargoPassword, setErrorLargoPassword] = useState(false)  

    const {token} = useContext(UserContext)
    if(token){
    return <Navigate to="/"/>
    }

    const validarDatos = (e) => {
        e.preventDefault()

        setEnvioOk(false)
        setErrorLargoPassword(false)
        setError(false)

        if (!email.trim() || !contraseña.trim()) {
            setError(true)
            return
        } 

        if (contraseña.length < 6) {
            setErrorLargoPassword(true)
            return
        } 
        
        setEnvioOk(true)
        
        setEmail('')
        setContraseña('')
    }

    return(
        <>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p className="msjError">Todos los campos son obligatorios</p> : null}
                {envioOk ? <p className="msjExitoso">Sus datos fueron enviados exitosamente</p> : null}
                {errorLargoPassword ? <p className="msjError">El password debe tener al menos 6 caracteres</p> : null}
                <div className="form-login">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="form-login">
                    <label>Contraseña</label>
                    <input type="text" name="contraseña" className="form-control" onChange={(e) => setContraseña(e.target.value)} value={contraseña}/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default Login