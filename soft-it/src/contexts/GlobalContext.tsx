import useMedia from "@/hooks/useMedia";
import { useRouter } from "next/router";
import { createContext, Dispatch, FC, SetStateAction, useCallback, useContext, useState } from "react";

type StateSetter<T> = Dispatch<SetStateAction<T>>;

interface IGlobalContext {
  activeLang: string;
  showMobileNav: boolean;
  setShowMobileNav: StateSetter<boolean>;
  media: Record<string, boolean>;
  changeLanguage: (lang: string) => void;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

const globalContext = createContext({} as IGlobalContext);

export const useGlobalContext = () => useContext(globalContext);

export const GlobalContextProvider: FC<GlobalContextProviderProps> = 
  ({ children }) => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const media = useMedia(
      ['mobile', 'only screen and (max-width: 48em)'],
      ['tablet', 'only screen and (max-width: 64em)'],
      ['wide', '(min-width: 87.5em)']
    );
    const router = useRouter();
    const activeLang = router.locale || 'en';
    
    const changeLanguage = useCallback((lang: string) => {
      if (activeLang === lang) return;
      router.push(
        router.pathname, 
        undefined, 
        { locale: lang, }
      );
    }, [router, activeLang]);

    const state: IGlobalContext = {
      activeLang,
      setShowMobileNav,
      showMobileNav,
      media,
      changeLanguage,
    };
    
    return (
      <globalContext.Provider value={state}>
        {children}
      </globalContext.Provider>
    );
  };