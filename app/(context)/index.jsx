"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const defaultValue = {
        contactForm: { name: "", email: "", phone: "", address: "" },
        basket: { itemsCount: 0, total: 0 },
        orders: [], // {phSlug, products:{slug, count, price}[], date, totalCount, totalSum }[]
    };
    const [orderData, setOrderData] = useState(defaultValue);

    const updateUserData = ({ name, email, phone, address }) => {
        setOrderData((prev) => ({
            ...prev,
            contactForm: { name, email, phone, address },
        }));
    };

    const handleAddItemToCart = (prSlug, phSlug, price) => {
        setOrderData((prevOrderState) => {
            const updateOrders = [...orderData.orders];
            const ind = updateOrders.findIndex((el = el.phSlug === phSlug));
            if (ind) {
                const updateProducts = [...updateOrders[ind].products];
                const productIndex = updateProducts((el) => el.slug === prSlug);
                if (productIndex) {
                    updateProducts[productIndex].count++;
                } else {
                    updateProducts.push({ slug: prSlug, count: 1, price });
                }
            } else {
                //
                updateOrders.push({
                    phSlug,
                    products: [{ slug: prSlug, count: 1, price }],
                });
            }
            const updateBasket = {
                itemsCount: prevOrderState.basket.itemsCount++,
                total: (prevOrderState.basket.total += price),
            };
            return {
                ...prevOrderState,
                basket: updateBasket,
                orders: updateOrders,
            };
        });
    };
    const handleRemoveItemFromCart = (prSlug, phSlug, price) => {
        setOrderData((prevOrderState) => {
            const updateBasket = { ...prevOrderState.basket };
            const updateOrder = [...prevOrderState.orders];
            const ind = updateOrder.findIndex((el) => el.phSlug === phSlug);
            const updateProducts = [...updateOrder[ind].products];
            const productIndex = updateProducts.findIndex(
                (el) => el.slug === prSlug
            );
            if (updateProducts[productIndex].count > 2) {
                updateProducts[productIndex].count--;
            } else {
                updateProducts[productIndex].splice(productIndex, 1);
            }
            updateBasket.count--;
            updateBasket.total -= price;
            return {
                ...prevOrderState,
                basket: updateBasket,
                orders: updateOrder,
            };
        });
    };

    return (
        <AppContext.Provider
            value={{
                contactForm,
                basket,
                orders,
                updateUserData,
                handleAddItemToCart,
                handleRemoveItemFromCart,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
