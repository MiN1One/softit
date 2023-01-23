import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";

type StateSetter<T> = Dispatch<SetStateAction<T>>;

interface IGlobalContext {
  setActiveLang: StateSetter<string>;
  activeLang: string;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const globalContext = createContext({} as IGlobalContext);

export const useGlobalContext = () => useContext(globalContext);

export const GlobalContextProvider: FC<GlobalContextProviderProps> = 
  ({ children }) => {
    const [activeLang, setActiveLang] = useState('en');

    const state: IGlobalContext = {
      activeLang,
      setActiveLang
    };
    
    return (
      <globalContext.Provider value={state}>
        {children}
      </globalContext.Provider>
    );
  };