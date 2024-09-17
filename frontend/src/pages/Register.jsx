import { useState, useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [confirmarContraseña, setConfirmarContraseña] = useState('')

const [error, setError] = useState(false)
const [errorLargoPassword, setErrorLargoPassword] = useState(false)
const [errorConfirmarContraseña, setErrorConfirmarContraseña] = useState(false)
const [envioOk, setEnvioOk] = useState(false)

const {token} = useContext(UserContext)
if(token){
return <Navigate to="/"/>
}

const validarDatos = (e) => {
    e.preventDefault()

    setEnvioOk(false)
    setError(false)
    setErrorLargoPassword(false)
    setErrorConfirmarContraseña(false)

    if (!email.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
        setError(true)
        return
    } 

    if (contraseña.length < 6 ) {
        setErrorLargoPassword(true)
        return
    } 

    if (contraseña != confirmarContraseña) {
        setErrorConfirmarContraseña(true)
        return
    } 
    
    setEnvioOk(true)
    
    setEmail('')
    setContraseña('')
    setConfirmarContraseña('')
}

    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p className="msjError">Todos los campos son obligatorios</p> : null }
                {envioOk ? <p className="msjExitoso">Sus datos fueron enviados exitosamente</p> : null}
                {errorLargoPassword ? <p className="msjError">El password debe tener al menos 6 caracteres</p> : null}
                {errorConfirmarContraseña ? <p className="msjError">Las contraseñas deben ser iguales</p> : null}
                <div className="form-register">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="form-register">
                    <label>Contraseña</label>
                    <input type="text" name="contraseña" className="form-control" onChange={(e) => setContraseña(e.target.value)} value={contraseña}/>
                </div>
                <div className="form-register">
                    <label>Confirmar Contraseña</label>
                    <input type="text" name="confirmarContraseña" className="form-control" onChange={(e) => setConfirmarContraseña(e.target.value)} value={confirmarContraseña}/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </>
    )
}

export default Register