import React from 'react'

export default function Burger({setOpen, open}) {
  return (
    <div onClick={()=>setOpen(!open)} className='burger'>
        <div className='burger_line'></div>
        <div className='burger_line'></div>
        <div className='burger_line'></div>
    </div>
  )
}
