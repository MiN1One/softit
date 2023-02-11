import { IHomeData } from "@/interfaces/home.interface";
import { StateSetter } from "@/interfaces/utils.interface";
import { createContext, FC, useContext, useState } from "react";

interface IHomeContextProviderProps {
  children: React.ReactNode;
  indexData: IHomeData;
}

interface IHomeContext {
  data: IHomeData,
  setData: StateSetter<IHomeData>;
}

export const homeContext = createContext({} as IHomeContext);

export const useHomeContext = () => useContext(homeContext);

export const HomeContextProvider: FC<IHomeContextProviderProps> = 
  ({ children, indexData }) => {
    const [data, setData] = useState<IHomeData>(indexData || {});
    const state: IHomeContext = {
      data,
      setData,
    };
    return (
      <homeContext.Provider value={state}>
        {children}
      </homeContext.Provider>
    );
  };