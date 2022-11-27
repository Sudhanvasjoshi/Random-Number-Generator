import './App.css';
import Start from './Components/Start';
import React , {useState} from 'react';
import {RandContext} from '../src/Helper/Rand';
import Random from './Components/Random';
function App() {
  const [start1, setStart] = useState("Start");
  const [text1 , setText1] = useState("");
  const [text2 , setText2] = useState("");
  return (
    <div className="App ">
      <RandContext.Provider value={{start1,setStart ,text1 ,text2 ,setText1,setText2}}>
        {start1 === "Start" && <Start/>}
        {start1 === "RandomGenerate" && <Random/>}
      </RandContext.Provider>
    </div>
  );
}

export default App;
