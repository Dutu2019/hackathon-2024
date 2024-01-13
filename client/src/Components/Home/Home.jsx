import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className='Home'>
        
        <button className='create-forum'>Create Forum +</button>
        <div className='info'>
            <h1>Welcome to Brebeuf forums!</h1>
            <p className='intro'>Click <i>Create Forum</i> to start a new discussion on your favorite subject or search for an existing one.</p>
        </div>
        <input type='text' placeholder='Search'/>
        <p className='topics'>Most relevant topics for you:</p>
    </div>
  )
}
