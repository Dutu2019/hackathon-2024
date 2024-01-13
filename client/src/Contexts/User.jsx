import React, {createContext} from 'react'

export const userContext = createContext()
export default function User(props) {
    const user = {
        isAuth: false
    }
  return (
    <userContext.Provider value={user}>
        {props.children}
    </userContext.Provider>
  )
}
