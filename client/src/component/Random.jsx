import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_random } from "../redux/action/actionType";
import { random } from "../redux/useSlices/RandomSlice";

export default function Random() {
  const dispatch = useDispatch();
  const listNumber = useSelector((number) => number.randomStore);
  // console.log(listNumber);

  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    dispatch(random(randomNumber));
  };

  return (
    <div>
      <h1>RandomCount:{JSON.stringify(listNumber)}</h1>
      <button onClick={handleRandom}>Click</button>
    </div>
  );
}
