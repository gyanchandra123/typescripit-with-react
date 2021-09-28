import React from "react";

type personListProps = {
  allNames: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.allNames.map((eachName) => {
        return (
          <h2>
            {eachName.first} {eachName.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
