import React , {useContext} from 'react'
import { RandContext } from '../Helper/Rand';
export default function Start() {

  const {start1 , setStart ,text1,setText1,text2,setText2} = useContext(RandContext);
  
    return (
    <div className="bg-red-300 w-screen h-screen items-center justify-start p-3"> 
    <div className="card container w-[40%] h-auto justify-center bg-slate-300 my-7 rounded-md">
      <div className="card-title items-center p-4 font-semibold text-red-500 text-[40px]">Welcome to Random Generator
      <p className="text-[30px]">Enter the Range</p></div>
      <div className="card-body flex m-4"><p className="text-[15px] font-semibold text-blue-600">Starting Range :</p><input type= "textbox" value={text1} className="w-[60%] mx-1" onChange={(e) => setText1(e.target.value)}></input></div>
      <div className="card-body m-4 flex"><p className="text-[15px] font-semibold text-blue-600">Ending Range :</p> <input type = "textbox" value={text2} className = "w-[60%] mx-1" onChange={(e) => setText2(e.target.value)}/></div>
      <div className="items-center my-3" ><button className = "btn btn-primary rounded-lg" onClick={() => setStart("RandomGenerate")}>Click to Start</button></div>
    </div>
    </div>
  )
}
