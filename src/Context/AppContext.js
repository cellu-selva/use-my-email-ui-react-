import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
const storage = sessionStorage;
export const AppContextProvider = (props) => {
  const [auth, setAuth] = useState(storage.getItem("auth") ?
    JSON.parse(storage.getItem("auth")) : {});
  useEffect(() => {
    storage.setItem("auth", JSON.stringify(auth));
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
