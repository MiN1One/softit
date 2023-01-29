import useMedia from "@/hooks/useMedia";
import { createContext, Dispatch, FC, SetStateAction, useContext, useState } from "react";

type StateSetter<T> = Dispatch<SetStateAction<T>>;

interface IGlobalContext {
  setActiveLang: StateSetter<string>;
  activeLang: string;
  showMobileNav: boolean;
  setShowMobileNav: StateSetter<boolean>;
  media: Record<string, boolean>;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const globalContext = createContext({} as IGlobalContext);

export const useGlobalContext = () => useContext(globalContext);

export const GlobalContextProvider: FC<GlobalContextProviderProps> = 
  ({ children }) => {
    const [activeLang, setActiveLang] = useState('en');
    const [showMobileNav, setShowMobileNav] = useState(false);
    const media = useMedia(
      ['mobile', 'only screen and (max-width: 48em)'],
      ['tablet', 'only screen and (max-width: 64em)'],
      ['wide', '(min-width: 87.5em)']
    );
    

    const state: IGlobalContext = {
      activeLang,
      setActiveLang,
      setShowMobileNav,
      showMobileNav,
      media,
    };
    
    return (
      <globalContext.Provider value={state}>
        {children}
      </globalContext.Provider>
    );
  };