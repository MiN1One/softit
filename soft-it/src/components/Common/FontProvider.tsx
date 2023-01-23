import { Inter } from "@next/font/google";
import { FC } from "react";

interface FontProviderProps {
  children: React.ReactNode;
}

const interFont = Inter({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '500', '600', '700']
});

const FontProvider: FC<FontProviderProps> = ({ children }) => {
  return (
    <div className={interFont.className}>
      {children}
    </div>
  );
};

export default FontProvider;