import React from 'react'

export default function PopupDiv(coordinateOfDiv, isVisible) {
  return (
    <div style={{display:isVisible? 'block':'none',position:'fixed', left:coordinateOfDiv.x, top:coordinateOfDiv.y}} class = "cursor_div">
                
    </div>
  )
}
