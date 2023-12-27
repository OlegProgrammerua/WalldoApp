import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import Timer from './GameComponents/Timer'
import { MdOutlineWarning } from "react-icons/md";
import NameField from './GameComponents/NameField';
import Footer from './GameComponents/Footer';
import Burger from './Burger';
import {Link} from 'react-router-dom'

export default function Game() {
    const [width, setWidth] = useState(window.innerWidth);
    const [runTimer,setRunTimer] = useState(true)
    const [seconds, setSeconds] = useState(0);
    const [images,setImages] = useState(null)
    const [items,setItems] = useState(null)
    const [coordinates, setCoordinates] = useState({x:0, y:0})
    const [coordinateOfDiv, setCoordinatesOfDiv] = useState({x:0,y:0})
    const [isVisible, setIsVisible] = useState(false);
    const [mismatch, setMismatch] = useState(false)
    const [win,setWin] = useState(false)
    const [open, setOpen] = useState(false)

    const handleResize = ()=>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', handleResize)

        return  ()=>{
            window.removeEventListener('resize', handleResize)
        }
    },[])
    
    

  


   

    useEffect(()=>{
        const handleLoadItems = async ()=>{
            const res = await axios.get('https://walldo-app-backend.vercel.app/coordinates/get')
            const gotCoordinates = res.data.coordinates
            setImages(gotCoordinates)
            setItems(gotCoordinates)
        }

        handleLoadItems()
    },[])
    

    const handleMouseMove = (event)=>{
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const normalizedX = Math.floor(x/rect.width*100)
        const normalizedY= Math.floor( y/rect.height*100)

        

        if(!isVisible){
            setCoordinates({x:normalizedX, y:normalizedY});
        }
        
        
    }

    

    const handleOnClick = (event)=>{
        if(!isVisible){
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            setCoordinatesOfDiv({x:x, y:y})
            setIsVisible(true)
        }
        else{
            setIsVisible(false)
            setCoordinatesOfDiv({x:0, y:0})
        }
        
        
    }

    const handleOnClickProcess = (item) =>{
       
        const distance = Math.sqrt(Math.pow(coordinates.x - item.x, 2)+Math.pow(coordinates.y-item.y, 2))
        
        if(distance<=5){
            console.log("Item is matched")
            item.found = true
            setItems((prevImages)=>prevImages.filter((item)=>item.found !==true))
            setIsVisible(false)
        }
        else{
            console.log("item is not matched")

                setMismatch(true);
                setTimeout(()=>{
                    setMismatch(false)
                }, 2000)
            
        }
        console.log(distance)
    }

    useEffect(()=>{
        const checkMatchedAllPersons = ()=>{
            const checking  = images?.every(item => item.found===true)
            if(checking){
                setTimeout(()=>{
                    setWin(true)
                }, 2000)
                setRunTimer(false)

                
            }
        }
     checkMatchedAllPersons()   
    })


  return (
    <div  class="game">
        <header className='header game_header'>
        <h1>
          <Link className='header_link' to="/">FindPerson</Link>
          </h1>
            {/* <p>{coordinates.x} {coordinates.y}</p> */}
            {width>790 ? (
                <div className='inner_bar'>
                <h3>Find these items:</h3>
                {images?.map((item)=>(
                    <div className='waldo_img'>
                        <div className="waldo_photo">
                            <img className='waldo_icon'  width ={50} height= {50} src={`./Items/${item.img}`}/>
                            
                            <div className="cross done">
                                <div className={`${item.found?'done_cross_1  done':'done_cross_1'}`}></div>
                                <div className={`${item.found?'done_cross_2  done':'done_cross_2'}`}></div>
                            </div>
                        </div>
                        <div className='waldo_name'>{item.name}</div>
                    </div>
                ))}
            
            </div>
            ): (
                <div>
                     <Burger open={open} setOpen = {setOpen}/>
                {open &&  <div className="inner_burger">
                   
                   {
                       images?.map((item)=>(
                           <div className='burger_content'>
                               <div className="waldo_photo">
                                <img className='waldo_icon'  width ={50} height= {50} src={`./Items/${item.img}`}/>
                            <div className="cross done">
                                <div className={`${item.found?'done_cross_1 done':'done_cross_1'}`}></div>
                                <div className={`${item.found?'done_cross_2 done':'done_cross_2'}`}></div>
                            </div>
                        </div>
                               <div>{item.name}</div>
                           </div>
                       ))
                   }
               </div> }
               
                </div>
            )}
            
            <Timer setSeconds = {setSeconds} seconds = {seconds} runTimer = {runTimer}/>
        </header>
        <main className='game_main'>
            
            
                <div style={{display:isVisible ? 'block':'none',position:'absolute', left:coordinateOfDiv.x-50, top:coordinateOfDiv.y-50}} className='item_circle'></div>
                <div style={{display:isVisible ? 'block':'none',position:'absolute', left:coordinateOfDiv.x, top:coordinateOfDiv.y}} className="cursor_div">
                        {items?.map((item)=>(
                             <div  onClick={()=>{handleOnClickProcess(item)}}  className='item_button'>
                             <img  width={50} height={50} src={`./Items/${item.img}`} alt="image_item" />
                             <div className='item_text'>{item.name}</div>
                         </div>
                        ))}
                    </div>
            
             <div className={`${mismatch?'error_div':'error_div no_error_div'}`}>
                <MdOutlineWarning/>
                <div>Try again</div>
            </div>
           
            
            <img id="game-container" onMouseMove={handleMouseMove} onClick={handleOnClick} className='waldo_image' src="./WaldoImage.jpg" alt="waldoimage" />
            

             <NameField win = {win} seconds={seconds}/>
        </main>
        <Footer/>
       
    </div>
    
  )
}
