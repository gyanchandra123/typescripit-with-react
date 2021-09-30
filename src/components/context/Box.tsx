import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div style={theme.primary}>theme context</div>
      <h3
        style={{
          backgroundColor: theme.secondary.main,
          color: theme.secondary.text,
        }}
      >
        here we are applying the secondary style
      </h3>
    </>
  );
};

export default Box;
