import React, { useState } from 'react'

function Table() {
    const [rows,setRows] = useState([])
    const [rowToUpdate, setRow] = useState(null)
    const [rowData, setRowData] = useState({
        rollNo:"",
        firstName:"",
        lastName:"",
        dept:""
    })

    function handleChange(e){
        const {name,value} = e.target
        // console.log(name, value);
        setRowData(prev=>({
            ...prev,
            [name]:value
        })) 
    }

    const handleAddRow = ()=>{
        if(rowData.rollNo === ""){
            alert("At least add some data.")
            return
        }
        setRows(prev=>([
            ...prev,
            rowData
        ]))
        setRowData({
            rollNo:"",
            firstName:"",
            lastName:"",
            dept:""
        })
    } 

  return (
    <div>
      <input value={rowData.rollNo} name="rollNo" onChange={(e)=>handleChange(e)} />
      <input value={rowData.firstName} name='firstName' onChange={(e)=>handleChange(e)} />
      <input value={rowData.lastName} name='lastName' onChange={(e)=>handleChange(e)} />
      <input value={rowData.dept} name='dept' onChange={(e)=>handleChange(e)} />
      <button onClick={handleAddRow}>Add Row</button>
      <div style={{display:'grid'}}>
      {
        rows.map(row=><div key={row.rollNo}>
            {
                row.rollNo === rowToUpdate? <div>
                <input>{row.rollNo} - </input>
                <input>{row.firstName} </input>
                <input>{row.lastName} </input>
                <input>{row.dept} </input>
                <span onClick={()=>alert("update, delete")}>save</span>
                </div>:
                <div>
                <span>{row.rollNo} - </span>
                <span>{row.firstName} </span>
                <span>{row.lastName} </span>
                <span>{row.dept} </span>
                <span onClick={setRow(row.rollNo)}>=</span>
                </div>
            }
            
        </div>)
      }
      </div>
      
    </div>
  )
}

export default Table
