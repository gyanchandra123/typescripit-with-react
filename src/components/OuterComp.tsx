import React from "react";

type OuterCompProps ={
    children :React.ReactNode
}

const OuterComp = (props:OuterCompProps) => {
  return <div>{props.children}</div>;
};

export default OuterComp;
