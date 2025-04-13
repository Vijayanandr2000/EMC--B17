import React, { useContext } from "react";
import { Parent1Context } from "../context/Parent1Context";

const Parent2 = ({ name }) => {
  const { superName } = useContext(Parent1Context);
  return (
    <div>
      Parent-2 - {name} - {superName}
    </div>
  );
};

export default Parent2;
