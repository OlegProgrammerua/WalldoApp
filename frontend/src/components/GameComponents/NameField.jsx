import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { formatTimer } from '../../utils/formatTimer'
import {useNavigate} from 'react-router-dom'


export default function NameField({win, seconds}) {
    const navigate = useNavigate();
    const [name, setName] = useState('')

    const handleSubmit = (e) =>{
      try{
        e.preventDefault()
        const formatTime = formatTimer(seconds)
        const response =  axios.post('https://walldo-app-backend.vercel.app/leader/post',{
          name:name,
          time:formatTime
        } )
  
        console.log(response)
        navigate('/leadership')

      }
      catch(error){ 
        console.log(error)
      }
     
    }

  return (
    <div className={`${win? 'outer_background opened':'outer_background'}`}>
       <div className={`${win?'name_field opened_field':'name_field'}`}>
          <h1>Type your name for leadership table:</h1>
          <form action="/leader/post" method='POST' onSubmit={handleSubmit}>
            <input type="text" class="name_input" value={name} onChange={(e)=>setName(e.target.value)} />
            <button className='button_submit'>Submit</button>
          </form>
      </div>
    </div>
   
  )
}
