import React from "react";

const Input = (props)=>{
    return (<input type={props.type} name={props.name} onChange={props.change} value={props.value} placeholder= {props.placeholder}  />)
}

export default Input;