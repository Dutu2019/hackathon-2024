import React, {useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"

export default function Login() {
  const navigate = useNavigate()
  const email = useRef()
  const password = useRef()

  async function submitLogin() {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_IP}/postLogin`, {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: email.current, password: password.current})
      })
      if (res.status == 200) {navigate("/")}

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='Login'>
      <h2>Log in to your Brebeuf Forums account</h2>
      <input type='email' placeholder='Email' onChange={(e) => {
        email.current = e.target.value
      }}/>
      <input type='password' placeholder='Password' onChange={(e) => {
        password.current = e.target.value
      }}/>
      <button className='submit-button' onClick={submitLogin}>Submit</button>
      <div className='toSignUp'>
        <p>Don't have an account? Join us now!</p>
        <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  )
}
