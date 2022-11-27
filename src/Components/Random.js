import React,{useState,useContext} from 'react'
import { RandContext } from '../Helper/Rand';
export default function Count() {
  const [Gener , setGener] = useState ("Click");
  const {text2,start1,setStart} = useContext(RandContext);
  const Generate =  () => {
     let x = Math.floor(Math.random() * text2);
     setGener(x);
      }
  return (

    <div className="bg-emerald-400 card container w-screen h-screen items-center justify-center">
      <div className=" w-[40%] h-auto rounded-md  my-4"><p className="font-semibold items-center text-[30px]">Random Number Generated</p>
      <div className="card container w-[25%] h-auto cursor-pointer rounded-md items-center p-4 my-4 justify-center " onClick={Generate}> <p className="text-[60px]">{Gener}</p></div></div>
      <div className="my-3 items-center"><button className = "btn btn-primary rounded-md" onClick={() =>setStart("Start")}><span className="font-semibold text-black p-2">Reset</span></button></div>
      

    </div>
  )
}
