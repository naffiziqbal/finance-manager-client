/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import Cookies from "js-cookie";
import { deleteService } from "../utils/deleteService";

export const ContextProvider = createContext<any>({});

const UserContext = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);

  const logout = () => {
    Cookies.remove("uid");
    Cookies.remove("token");
  };

  const handleDeleteService = async (id: string) => {
    const data = await deleteService(id);
    return data;
  };

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    logout,
    handleDeleteService,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export default UserContext;
