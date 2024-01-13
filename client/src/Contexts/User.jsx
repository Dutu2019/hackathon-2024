import React, {createContext, useEffect, useState} from 'react'

export const userContext = createContext()
export default function User(props) {
  const [user, setUser] = useState({isAuth: false})

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_IP}/session`, {
          credentials: 'include'
        })
        if (res.status === 200) {
          setUser(res.body)
        }
      } catch (e) {
        console.log(e)
      }
  }
  getUser()
  }, [])
  
  return (
    <userContext.Provider value={user}>
        {props.children}
    </userContext.Provider>
  )
}
