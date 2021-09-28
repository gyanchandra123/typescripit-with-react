import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  //object
  const personName = {
    first: "Bruce",
    last: "wayne",
  };

  //array :
  const nameList = [
    { first: "Bruce", last: "wayne" },
    { first: "clark ", last: "super" },
    { first: "pincess ", last: "diana" },
  ];

  return (
    <div className="App">
      <Greet name="gyanchan" messageCount={10} isLogin={false}></Greet>
      <Person name={personName}></Person>
      <PersonList allNames ={nameList}></PersonList>
    </div>
  );
}

export default App;
