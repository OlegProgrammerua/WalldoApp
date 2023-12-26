import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
        <h1>
          <Link className='header_link' to="/">FindPerson</Link>
          </h1>
        <div>
            <Link className='link_leadership' to="/leadership" >LeaderShip table</Link>
        </div>
    </header>
  )
}
