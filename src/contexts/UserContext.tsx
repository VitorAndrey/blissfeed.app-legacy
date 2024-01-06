import { createContext, ReactNode, useState } from "react";

import { User } from "@models/index";

type UserContextType = {
  user: User | null;
  handleUpdateUser: (user: User | null) => void;
  isUserLogged: boolean;
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  function handleUpdateUser(user: User | null) {
    if (!user) return setUser(null);

    setUser(user);
  }

  const isUserLogged = user ? true : false;

  return (
    <UserContext.Provider value={{ isUserLogged, handleUpdateUser, user }}>
      {children}
    </UserContext.Provider>
  );
}
