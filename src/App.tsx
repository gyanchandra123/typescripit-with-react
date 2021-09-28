import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import OuterComp from "./components/OuterComp";
import InnerComp from "./components/InnerComp";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

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
      {/* <Greet name="gyanchan" messageCount={10} isLogin={false}></Greet>
      <Person name={personName}></Person>
      <PersonList allNames ={nameList}></PersonList>
       <Status status='success'></Status> 
        <Heading>this is the heading content</Heading>

      <OuterComp>
        <InnerComp>this is inner comp content</InnerComp>
      </OuterComp> 
       <Greet name="gyanchan"  isLogin={true}></Greet>

      <Button
        handleClick={(event, id) => {
          console.log(`the employee details are send with ${id}`, event);
        }}
      ></Button>
      <Input
        inputvalue=""
        handleChange={(even) => {
          console.log("this is from the input even", even);
        }}
      ></Input>*/}

      <Container
        styles={{ color: "blue", border: "2px solid black",padding:'1rem' }}
      ></Container>
    </div>
  );
}

export default App;
