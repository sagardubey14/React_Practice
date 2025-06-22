import React, { useEffect, useReducer } from 'react'

const intialUsers = [
    {
        id:1,
        name:'sagar',
        roll:21,
    },
    {
        id:2,
        name:'Valli',
        roll:24,
    }
]


function Reducer() {

    function taskReducer(users, action){
        switch (action.type) {
            case "add":
                return [...users, action.payload];
        
            case "update":
                return users.map(u=>{
                    if(u.id === action.id){
                        return {...u, name:'xyz'};
                    }
                    else{
                        return u;
                    }
                })
            
            default:
                console.log(`Error Unkown type - ${action.type}`)
                return users;
        }
    }
    const [users, dispatch] = useReducer(taskReducer, intialUsers);
    useEffect(()=>{
        console.log(users);
    },[users])


  return (
    <div>
      kuch nhi
      <button onClick={()=>dispatch({type:'add', payload:{id:1, name:'abc', roll:20}})}>add</button>
      {
        users.map((u, index)=>
        <div key={index} onClick={()=>dispatch({type:'update', id:u.id})}>
            {u.id +" - "+ u.name}
        </div>
        )
      }
    </div>
  )
}

export default Reducer
