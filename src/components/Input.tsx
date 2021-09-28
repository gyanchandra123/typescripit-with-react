import React from "react";

type inputProps = {
  inputvalue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: inputProps) => {
  const { inputvalue = "initial data" } = props;

  return <input type="text" value={inputvalue} onChange={props.handleChange} />;
};

export default Input;
