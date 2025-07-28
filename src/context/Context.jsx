import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedCat, setSelectedCat] = useState("Camera");

  return (
    <Context.Provider value={{ selectedCat, setSelectedCat }}>
      {children}
    </Context.Provider>
  );
};
