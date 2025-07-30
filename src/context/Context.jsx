import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedCat, setSelectedCat] = useState("Camera");
  const [googleModal, setGoogleModal] = useState(false);

  return (
    <Context.Provider
      value={{ selectedCat, setSelectedCat, googleModal, setGoogleModal }}
    >
      {children}
    </Context.Provider>
  );
};
