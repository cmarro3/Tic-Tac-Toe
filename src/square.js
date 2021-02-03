import React from "react";

const style = value ? `squares ${value}` : `squares`;
const sqaure = ({value, onClick}) => {
    return(
    <button classname = {style} onClick = {onClick}> 
    {value}
    </button>) };

export default sqaure;

