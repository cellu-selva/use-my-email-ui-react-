import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [auth, setAuth] = useState(localStorage.getItem("auth") ?
    JSON.parse(localStorage.getItem("auth")) : {});
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);
  return (
    <AppContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
