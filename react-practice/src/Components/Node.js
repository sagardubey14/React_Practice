import React, { useState } from 'react'

function Node({node, setShowWin, showWin , addChild, deleteChild}) {
    function setWin(NodeId){
        setShowWin(NodeId);
    }
  return (
    <div>
      <text onClick={()=>setWin(node.id)}>{node.name}</text>
        {showWin===node.id &&
        <>
        <button onClick={()=>deleteChild(node.id)}>Delete</button>
        <button onClick={()=>addChild(node)}>Add Child</button>
        </>
        }
    <div style={{display:'flex'}}>
    {
        node.child.map(childNode =>(
            <Node key={childNode.id} node={childNode} setShowWin={setShowWin} showWin={showWin} addChild={addChild} deleteChild={deleteChild} />
        ))
    }
    </div>
    </div>
  )
}

export default Node
