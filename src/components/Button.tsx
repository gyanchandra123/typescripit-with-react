import React from 'react';
/* 
type buttonProps = {
    handleClick : ()=> void
} */

type buttonProps = {
    handleClick : (event:React.MouseEvent<HTMLButtonElement>,id:number)=> void
}

const Button = (props:buttonProps) => {
    return (
        <button onClick={(event)=>props.handleClick(event,1)}>
            send response
        </button> 
    )
}

export default Button
