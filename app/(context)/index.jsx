"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const defaultBasketCount = 0;

    const [basketCount, setBasketCount] = useState(defaultBasketCount);

    return (
        <AppContext.Provider value={{ basketCount, setBasketCount }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
