import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import "./Login.css"
import { userContext } from '../../Contexts/User'

export default function Login() {
  const user = useContext(userContext)
  
  return (
    <div className='Login-button'>
        <button type='button'>
          <Link to="/login" className='Login-link'>Login</Link>
        </button>
    </div>
  )
}
