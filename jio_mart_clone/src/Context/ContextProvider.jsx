import React from "react";
import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [cartPopUpVisible, setcartPopUpVisible] = useState(false);
  const value = { cartPopUpVisible, setcartPopUpVisible };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
