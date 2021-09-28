import React from "react";

type inputProps = {
  inputvalue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ( {inputvalue="initial data",handleChange}: inputProps) => {  
  return <input type="text" value={inputvalue} onChange={handleChange} />;
};

export default Input;
