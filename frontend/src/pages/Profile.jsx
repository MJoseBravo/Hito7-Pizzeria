import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Profile = () => {
  const {token} = useContext(UserContext)
  if(!token){
    return <Navigate to="/login"/>
  }
  return (
    <div className='pt-3 pb-3'>
        <h4>usuario@mail.com</h4>
        <Link to="/" className="btn btn-secondary">Cerrar sesión</Link>
    </div>
  )
}

export default Profile
