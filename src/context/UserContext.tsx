/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const ContextProvider = createContext<any>({});

const UserContext = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);

  const logout = () => {
    Cookies.remove("uid");
    Cookies.remove("token");
  };

  const value = { user, setUser, loading, setLoading, logout };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export default UserContext;
