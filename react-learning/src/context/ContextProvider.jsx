import  { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "Johndue@gmial.com",
  });


  


  return <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>;
};

export default ContextProvider;
