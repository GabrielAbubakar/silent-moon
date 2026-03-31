import React, { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  hasSeenSleepWelcome: boolean;
  setHasSeenSleepWelcome: (value: boolean) => void;
  userName: string;
  setUserName: (value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [hasSeenSleepWelcome, setHasSeenSleepWelcome] = useState(false);
  const [userName, setUserName] = useState("Gabriel");

  return (
    <AppContext.Provider
      value={{
        hasSeenSleepWelcome,
        setHasSeenSleepWelcome,
        userName,
        setUserName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
