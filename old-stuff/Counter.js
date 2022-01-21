// this has some nody examples of using state and effects
import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState({ counter: 0 });
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("I will run after every render");
  });
  useEffect(() => {
    console.log("One hit wonder, only run once!");
  }, []);

  useEffect(() => {
    console.log("Only called once in a while!");
  }, [flag]);

  const add1ToCounter = () => {
    const newCounterValue = count.counter + 1;
    if (count.counter % 5 === 0) {
      setFlag(true);
    } else {
      setFlag(false);
    }
    setCount({ counter: newCounterValue });
  };

  return (
    <div>
      <p>You clicked {count.counter} times</p>
      <button onClick={add1ToCounter}>Click me</button>
    </div>
  );
}
