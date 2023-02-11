import useMedia from "@/hooks/useMedia";
import { IHeadData } from "@/interfaces/common.interface";
import { useRouter } from "next/router";
import { createContext, FC, useCallback, useContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { StateSetter } from "@/interfaces/utils.interface";

interface IGlobalContext {
  activeLang: string;
  showMobileNav: boolean;
  setShowMobileNav: StateSetter<boolean>;
  media: Record<string, boolean>;
  setHeadData: StateSetter<IHeadData>;
  headData: IHeadData;
  changeLanguage: (lang: string) => void;
}

interface GlobalContextProviderProps {
  children: React.ReactNode;
  headData: IHeadData;
}

const globalContext = createContext({} as IGlobalContext);

export const useGlobalContext = () => useContext(globalContext);

export const GlobalContextProvider: FC<GlobalContextProviderProps> = 
  ({ children, headData: headDataProp }) => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const media = useMedia(
      ['mobile', 'only screen and (max-width: 48em)'],
      ['tablet', 'only screen and (max-width: 64em)'],
      ['wide', '(min-width: 87.5em)']
    );
    const router = useRouter();
    const activeLang = router.locale || 'uz';
    const [headData, setHeadData] = useState<IHeadData>(headDataProp || {});
    const { i18n } = useTranslation();
    
    const changeLanguage = useCallback(async (lang: string) => {
      if (activeLang === lang) return;
      await i18n.changeLanguage(lang);
      await router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, }
        }, 
        undefined, 
        { locale: lang, }
      );
      window.location.reload();
    }, [router, activeLang, i18n]);

    const state: IGlobalContext = {
      activeLang,
      setShowMobileNav,
      showMobileNav,
      media,
      changeLanguage,
      setHeadData,
      headData,
    };
    
    return (
      <globalContext.Provider value={state}>
        {children}
      </globalContext.Provider>
    );
  };