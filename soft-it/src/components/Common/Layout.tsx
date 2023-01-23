import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;