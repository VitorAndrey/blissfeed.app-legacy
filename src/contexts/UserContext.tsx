import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  isUserLogged: boolean;
  setIsUserLogged: (value: boolean) => void;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

  return (
    <UserContext.Provider value={{ isUserLogged, setIsUserLogged }}>
      {children}
    </UserContext.Provider>
  );
}
