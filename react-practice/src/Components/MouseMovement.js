import React, { useState } from 'react'

function MouseMovement() {
    const [cords, setCords] = useState({x:0, y:0});
  return (
    <div onPointerMove={ e=>
        setCords({
            x:e.clientX,
            y:e.clientY
        })}
        style={{
            position:'relative',
            height:'100vh',
            width:'100vw'
        }}
    >
      <div style={{
        position:'absolute',
        transform:`translate(${cords.x}px, ${cords.y}px)`,
        backgroundColor:'red',
        borderRadius:'10px',
        height:'10px',
        width:'10px',
        top:'-10',
        left:'-10'
    }}>

      </div>
    </div>
  )
}

export default MouseMovement
