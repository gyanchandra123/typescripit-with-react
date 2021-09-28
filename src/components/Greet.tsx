import React from 'react'

type GreetProps = {
    name:string
}

export const Greet = (props:GreetProps) => {
    return (
        <div>
            <h2>welcome {props.name} ! u have 10 unread message</h2>
        </div>
    )
}


