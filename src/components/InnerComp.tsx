import React from "react";
type innerCompProps = {
  children: string;
};
const InnerComp = (props:innerCompProps) => {
  return <div> {props.children}.</div>;
};

export default InnerComp;
