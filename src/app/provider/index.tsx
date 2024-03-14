'use client'
import React, { createContext } from "react";
import ReduxProvider from "./redux";

// Create a context for wrapping the app
interface AppContextValue {
  // Add any properties or functions you want to expose through the context here
}

const AppContext = createContext<AppContextValue | null>(null);

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={null}>
      <ReduxProvider>{children}</ReduxProvider>
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
