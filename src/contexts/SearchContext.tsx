import { ReactNode, createContext, useState } from "react";

type SearchContext = {
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
};

export const SearchContext = createContext({} as SearchContext);

export function SearchContextProvider({ children }: { children: ReactNode }) {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <SearchContext.Provider value={{ isSearching, setIsSearching }}>
      {children}
    </SearchContext.Provider>
  );
}
