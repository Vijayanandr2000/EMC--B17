import React from "react";
import Page3 from "./page-3";

const Page2 = ({ name }) => {
  return (
    <div>
      Page-2
      <Page3 name={name} />
    </div>
  );
};

export default Page2;
