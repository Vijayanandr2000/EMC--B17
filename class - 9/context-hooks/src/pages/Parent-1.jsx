import React from "react";
import Page1 from "./Page-1";
import Parent2 from "./Parent-2";
import { Parent1Provider } from "../context/Parent1Context";

const Parent1 = () => {
  let name = "vijay";
  return (
    <div>
      Parent-1 - {name}
      <Parent1Provider>
        <Page1 name={name} />
        <Parent2 name={name} />
      </Parent1Provider>
    </div>
  );
};

export default Parent1;
