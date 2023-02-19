import useMedia from "@/hooks/useMedia";
import { IHeadData, PageMeta } from "@/interfaces/common.interface";
import { useRouter } from "next/router";
import { createContext, FC, useCallback, useContext, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { StateSetter } from "@/interfaces/utils.interface";
import PageHead from "@/components/Common/PageHead";

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
  meta?: PageMeta;
  headData: IHeadData;
}

const globalContext = createContext({} as IGlobalContext);

export const useGlobalContext = () => useContext(globalContext);

export const GlobalContextProvider: FC<GlobalContextProviderProps> = 
  ({ children, headData: headDataProp, meta }) => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const media = useMedia(
      ['mobile', 'only screen and (max-width: 48em)'],
      ['tablet', 'only screen and (max-width: 64em)'],
      ['wide', '(min-width: 87.5em)']
    );
    const router = useRouter();
    const activeLang = router.locale || 'uz';
    const [headData, setHeadData] = useState<IHeadData>(headDataProp || {});
    const { i18n, t } = useTranslation();

    useEffect(() => {
      window.scrollTo({ top: 0 });
    }, []);
    
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

    let content = (
      <globalContext.Provider value={state}>
        {children}
      </globalContext.Provider>
    );

    if (meta) {
      const isObject = typeof meta === 'object';
      const title = isObject ? meta.title : t(`meta.${meta}.title`);
      const description = isObject ? meta.description : t(`meta.${meta}.description`);
      content = (
        <PageHead title={title} description={description}>
          {content}
        </PageHead>
      );
    }
    
    return content;
  };