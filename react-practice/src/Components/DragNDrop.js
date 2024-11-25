import React from 'react'

function DragNDrop() {
  return (
    <div>
        <h1>Box</h1>
      <div style={{border:"1px dashed black", height:"50vh", textAlign:"center", margin:"1px 10px"}}>
        Drop file here
      </div>
      <button style={{display:"block", margin:" auto"}}>Upload</button>
    </div>
  )
}

export default DragNDrop
