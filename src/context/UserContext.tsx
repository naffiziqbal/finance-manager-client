/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

export const ContextProvider = createContext<any>({});

const UserContext = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<any>(false);

  const value = { user, setUser, loading, setLoading };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export default UserContext;
