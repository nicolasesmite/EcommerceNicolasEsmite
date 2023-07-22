import React from "react";
import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    counter < stock ? setCounter(counter + 1) : alert("cantidad maxima");
  };

  const subtrac = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return <Counter add={add} subtrac={subtrac} counter={counter} />;
};

export default CounterContainer;
