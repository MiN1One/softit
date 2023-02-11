import { useGlobalContext } from "@/contexts/GlobalContext";
import dynamic from "next/dynamic";
import React, { FC } from "react";
import Footer from "../Footer/Footer";
import SafeHydrate from "./SafeHydrate";

interface LayoutProps {
  children: React.ReactNode;
}

const AsyncNavigation = dynamic(() => 
  import('@components/Navigation/Navigation')
);
const AsyncMobileNavigation = dynamic(() => 
  import('@components/MobileNavigation/MobileNavigation')
);

const Layout: FC<LayoutProps> = ({ children }) => {
  const { media, headData } = useGlobalContext();
  return (
    <React.Fragment>
      {headData.headerData && (
        <SafeHydrate releaseContent>
          {media.tablet
            ? <AsyncMobileNavigation />
            : <AsyncNavigation />
          }
        </SafeHydrate>
      )}
      {children}
      {headData.footerData && (
        <Footer />
      )}
    </React.Fragment>
  );
};

export default Layout;