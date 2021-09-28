import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLogin: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLogin
          ? `welcome ${props.name} ! u have ${props.messageCount} unread message`
          : "welcome guest"}
      </h2>
    </div>
  );
};
