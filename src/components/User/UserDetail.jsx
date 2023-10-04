import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'


const UserDetail = () => {
    const userData = useContext(UserContext)
    
    return (
        <div>
            <h3>Datos del Usuario</h3>
            <p>Nombre: {userData.name}</p>
            <p>Edad: {userData.age}</p>
        </div>
    )
}

export default UserDetail
