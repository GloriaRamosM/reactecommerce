import React, {useState } from 'react'
import UserContext from './UserContext'


const UserContextProvider = ({ children }) => {

    const[user, setUser] = useState({
        name: "Gloria",
        age:27
      })
      
    
  return (
    <UserContext.Provider value= {user}>
        { children }
    </UserContext.Provider>
  )
}

export default UserContextProvider
