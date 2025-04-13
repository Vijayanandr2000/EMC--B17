import React, { useContext } from "react";
import Page2 from "./Page-2";
import { Parent1Context } from "../context/Parent1Context";

const Page1 = ({ name }) => {
  const { superName } = useContext(Parent1Context);
  return (
    <div>
      Page-1 - {superName}
      <Page2 name={name} />
    </div>
  );
};

export default Page1;
