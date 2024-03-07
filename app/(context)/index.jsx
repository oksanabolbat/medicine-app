"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const [basketCount, setBasketCount] = useState(88);

    return (
        <AppContext.Provider value={basketCount}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
