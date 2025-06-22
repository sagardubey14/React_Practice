import { useEffect, useState } from "react"
import './App.css'
import { useUser } from "./Context/UserContext";
import MouseMovement from "./Components/MouseMovement";
import Reducer from "./Components/Reducer";
import LazyComp from "./Components/LazyComp";
function App() {
  const {user, setUser} = useUser();
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log(count);
  },[count])
  
  return (
    <div className="main">
      {/* <MouseMovement /> */}
      {/* <Reducer /> */}
      <LazyComp />
    </div>
  )
}

export default App
