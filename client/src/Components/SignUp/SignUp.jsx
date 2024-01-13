import React, {useRef} from 'react'
import "./SignUp.css"
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate()
    const name = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const topics = useRef()

    async function submitSignUp() {
        try {
            const res = await fetch(`${process.env.REACT_APP_SERVER_IP}/postSignUp`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify({
                  name: name.current,
                  lastName: lastName.current,
                  email: email.current,
                  password: password.current,
                  topics: topics.current
                })
            })
    
            if (res.status === 200) {
                navigate("/")
            }
        } catch (e) {
            console.log(e)
        }

    }

  return (
    <div className='SignUp'>
      <h2>Log in to your Brebeuf Forums account</h2>
      <input type='text' placeholder='Name' onChange={(e) => {
        name.current = e.target.value
      }}/>
      <input type='text' placeholder='Last name' onChange={(e) => {
        lastName.current = e.target.value
      }}/>
      <input type='email' placeholder='Email' onChange={(e) => {
        email.current = e.target.value
      }}/>
      <input type='password' placeholder='Password' onChange={(e) => {
        password.current = e.target.value
      }}/>
    <input type='text' className='topics' placeholder="Topics you're interested in" onChange={(e) => {
        topics.current = e.target.value
    }}/>
    <p className='instruction'>Please seperate your topics by a comma. <br/> Ex: Computer science, Math, Chemistry</p>
      <button className='submit-button' onClick={submitSignUp}>Submit</button>
    </div>
  )
}
