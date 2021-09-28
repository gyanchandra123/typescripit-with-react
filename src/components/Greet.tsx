import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLogin: boolean;
};

export const Greet = (props: GreetProps) => {
  const {messageCount=0} =props;
  return (
    <div>
      <h2>
        {props.isLogin
          ? `welcome ${props.name} ! u have ${messageCount} unread message`
          : "welcome guest"}
      </h2>
    </div>
  );
};
