import React from "react";
import { useState, useEffect } from "react";
/* the useEffect hook is used to implement some sour of action when a component is mountin
the component is unmonting of is running */
export const Text = () => {
  const [text, setText] = useState("");

  useEffect(
    () => {
      // this will be ejectuted twice, so you need to eliminte the strit mode on the index.js file
      // this triggers when every time if we don't put something next
      console.log("component mounted");
      // with this return we can make it do something when the component is unmounted
      return () => {
        console.log("component UNmounted");
      };
    },
    [] /* in this array over here we told the useEffect when it should trigger */
  );

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <h1>{text}</h1>
    </div>
  );
};
