import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import User from "./Components/User";
//import { useState } from "react";

function App() {
  //return <User />;

  let [initiaVal, setInitialVal] = useState(false);

  const clickHandler = () => {
    setInitialVal(true);
  };
  let showPara = ()=> {
     if(initiaVal) 
     {
    return(    <p> Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
       </p>) ;
       
     }
     else return null ;
  }

  return (
    <div>
      <button id="click" onClick={clickHandler}>
        Click Me
      </button>
     {showPara() } 
    </div>
  );
}

export default App;
