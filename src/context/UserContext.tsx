/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

export const ContextProvider = createContext<any>({});

const UserContext = ({ children }: { children: any }) => {
  const [user, setUser] = useState<any>({});

  const value = { user, setUser };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export default UserContext;
