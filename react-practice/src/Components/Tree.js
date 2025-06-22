import React, { useEffect, useState } from 'react'
import Node from './Node'

const initialRoot ={
  id:1,
  name:"Root",
  child:[
    {
      id:11,
      name:"Root1",
      child:[
        {
          id:111,
          name:"Root11",
          child:[]
        },
        {
          id:112,
          name:"Root12",
          child:[]
        }
      ]
    },
    {
      id:12,
      name:"Root2",
      child:[
        {
          id:121,
          name:"Root21",
          child:[]
        }
      ]
    }
  ]
}

function Tree() {
  const[updateRoot,setUpdateRoot] = useState(false);
  // useEffect(()=>{
  //   console.log("changed");
    
  // },[updateRoot])
  const[showWin,setShowWin] = useState(null);
  const newChild = {
    id:100,
    name:"child",
    child:[]
  }
  function winDisplay(nodeId){
    setShowWin(nodeId)
    setTimeout(()=>{
      console.log('NULL');
      setShowWin(null);
    },5000)
  }
  function addChild(obj){
    console.log(obj)
    obj.child = [...obj.child, newChild]
    console.log(obj)
    setUpdateRoot(prev=>!prev)
    setShowWin(null)
  }
  function deleteChild(objId){
    function deleteIt(root,objId){
      const objToDel = root.child.filter(child => child.id === objId)
      console.log(objToDel);
      console.log(root.child.length, objId)
    }
    function deleteWithId(root,objId, level){
      const objToDel = root.child.filter(child => child.id === objId)
      console.log(objToDel, objId, level);
      if(objToDel.length === 0){
        const newRoot = root.child.filter(child => child.id === Math.floor(objId/(10**level)))
        console.log(newRoot);
        deleteWithId(newRoot[0], objId, level+1)
      }else{
        root.child = root.child.filter(child => child.id !== objId)
      }
    }
    deleteWithId(initialRoot, objId, 1)
    // deleteIt(initialRoot, objId)
    setShowWin(null)
  }
  return (
    <div>
      <Node node={initialRoot} setShowWin={winDisplay} addChild={addChild} deleteChild={deleteChild} showWin={showWin}/>
      
    </div>
  )
}

export default Tree

