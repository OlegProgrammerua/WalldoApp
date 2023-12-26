import React from 'react'
import Layout from './Layout'
import {useState, useEffect } from 'react'
import axios from 'axios'

export default function LeadershipTable() {
    const [leaders, setLeaders] = useState()

    useEffect(()=>{
        const handleLoadLeaders = async () =>{
            const response  = await axios.get('http://localhost:5000/leader/get')
            const data = response.data.leaders;
            setLeaders(data)
            console.log(leaders)
        }

        handleLoadLeaders()
        
    },[])
  return (
    <Layout>
        <h1 className='leadership_title'>Leadership table</h1>
        <table className='table'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Time</th>
            </tr>
            </thead>
            
            <tbody>
                {leaders?.map((leader)=>(
                    <tr>
                        <td>{leader.name}</td>
                        <td>{leader.time}</td>
                    </tr>
                    
                     
                ))
                   
                }
                
          </tbody>
        </table>
    
    </Layout>
  )
}
