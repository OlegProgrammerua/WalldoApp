import React from 'react'
import {useState, useEffect} from 'react'

export default function Timer({runTimer, seconds, setSeconds}) {
  
   

   const formatTimer = (timeInSeconds) =>{

    const seconds = Math.floor(timeInSeconds%60)
    const minutes = Math.floor((timeInSeconds%3600)/60)
    const hours = Math.floor(timeInSeconds/3600)

    const formatNumber = num => num<10? `0${num}`:num

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`
   }

   const timerHandle = () =>{
    setInterval(()=>{
        setSeconds(prevSeconds => prevSeconds+1)
    },1000)
   }

   useEffect(()=>{
    if(runTimer){
        timerHandle()
    }
    
    return ()=>timerHandle();
   }, [runTimer])
   


  return (
    <div className='timer'>{formatTimer(seconds)}</div>
  )
}
