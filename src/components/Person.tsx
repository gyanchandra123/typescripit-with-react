import React from "react";

type userNameProps = {
  name: {
    first: string;
    last: string;  
  };
};

const Person = (props: userNameProps) => {
  return (
    <div>
      {props.name.first} nbsp; {props.name.last}
    </div>
  );
};

export default Person;
