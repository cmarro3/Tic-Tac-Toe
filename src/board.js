import React from "react";
import sqaure from "./square";

const board = ({squares, onClick}) => (
   <div className ="board">
       {squares.map((sqaure,i)=> (
           <sqaure key ={i} value = {sqaure} onClick ={()=> onclick(i)}/>
       ))}
   </div> 
);

export default board;