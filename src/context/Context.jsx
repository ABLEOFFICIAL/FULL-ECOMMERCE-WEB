import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedCat, setSelectedCat] = useState("Camera");
  const [googleModal, setGoogleModal] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [display, setDisplay] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [accountCategory, setAccountCategory] = useState("myprofile");

  return (
    <Context.Provider
      value={{
        selectedCat,
        setSelectedCat,
        googleModal,
        setGoogleModal,
        formStatus,
        setFormStatus,
        display,
        setDisplay,
        searchValue,
        setSearchValue,
        accountCategory,
        setAccountCategory,
      }}
    >
      {children}
    </Context.Provider>
  );
};
