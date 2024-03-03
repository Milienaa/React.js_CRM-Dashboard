import { Children, createContext, useState } from "react";

export const DashboardContext = createContext();

export function Context({ children }) {
    const state = false;
    const value = { state };
    
    return(
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    )
}