import React from 'react'


const handleDrop = (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("ele");
  console.log(data);

}

const handleDragOver = (e)=>{
  e.preventDefault()
  
  
}
const dragStart = (e)=>{
  e.dataTransfer.setData("ele" , "fl");
}

function DragNDrop() {
  return (
    <div id='dnd'>
      <h1>Box</h1>
      <div draggable={true} onDragStart={dragStart} style={{ border: "1px dashed black", height: "50vh", textAlign: "center", margin: "1px 10px" }}>
        Drop file here
      </div>
      <button style={{ display: "block", margin: " auto" }}>Upload</button>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        Drop here
      </div>
    </div>
  )
}

export default DragNDrop
