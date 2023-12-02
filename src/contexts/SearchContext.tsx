import { createContext, ReactNode, useState } from "react";

type SearchContext = {
  isSearching: boolean;
  handleStartSearching: () => void;
  handleStopSearching: () => void;
};

export const SearchContext = createContext({} as SearchContext);

export function SearchContextProvider({ children }: { children: ReactNode }) {
  const [isSearching, setIsSearching] = useState(false);

  function handleStartSearching() {
    setIsSearching(true);
  }

  function handleStopSearching() {
    setIsSearching(false);
  }

  return (
    <SearchContext.Provider
      value={{ isSearching, handleStartSearching, handleStopSearching }}
    >
      {children}
    </SearchContext.Provider>
  );
}
