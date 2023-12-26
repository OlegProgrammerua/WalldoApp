import React from 'react'
import { Link } from 'react-router-dom'

export default function MainScreen() {
  return (
    <main className='main'>
        <button className='start_button' ><Link style={{color:"inherit", textDecoration:"none"}} to="/game">Start Game</Link></button>
    </main>
  )
}
