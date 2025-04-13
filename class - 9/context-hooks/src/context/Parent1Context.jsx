import { createContext } from "react";

export const Parent1Context = createContext();

export const Parent1Provider = ({ children }) => {
  let superName = "anand";
  return (
    <Parent1Context.Provider value={{ superName }}>
      {children}
    </Parent1Context.Provider>
  );
};
