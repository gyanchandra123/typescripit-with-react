import React from 'react'

type containerProps ={
    styles : React.CSSProperties
}

const Container = (props:containerProps) => {
    return (
        <div style={props.styles}>
            text content goes here
        </div>
    )
}

export default Container
