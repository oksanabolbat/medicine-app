"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const defaultValue = {
        contactForm: { name: "", email: "", phone: "", address: "" },
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
            const phIndex = prevOrderState.orders.findIndex(
                (el) => el.phSlug === phSlug
            );
            if (phIndex > -1) {
                const productIndex = prevOrderState.orders[
                    phIndex
                ].products.findIndex((el) => el.slug === prSlug);

                if (productIndex !== -1) {
                    return {
                        ...prevOrderState,
                        orders: prevOrderState.orders.map((ph, i) =>
                            i === phIndex
                                ? {
                                      phSlug,
                                      products: prevOrderState.orders[
                                          phIndex
                                      ].products.map((product, i) =>
                                          i === productIndex
                                              ? {
                                                    ...product,
                                                    count: product.count + 1,
                                                }
                                              : product
                                      ),
                                  }
                                : ph
                        ),
                    };
                }

                return {
                    ...prevOrderState,
                    orders: prevOrderState.orders.map((ph, i) =>
                        i === phIndex
                            ? {
                                  phSlug,
                                  products: [
                                      ...prevOrderState.orders[phIndex]
                                          .products,
                                      { slug: prSlug, count: 1, price: +price },
                                  ],
                              }
                            : ph
                    ),
                };
            }

            return {
                ...prevOrderState,
                orders: [
                    ...prevOrderState.orders,
                    {
                        phSlug,
                        products: [{ slug: prSlug, count: 1, price: +price }],
                    },
                ],
            };
        });
    };
    const handleRemoveItemFromCart = (prSlug, phSlug) => {
        setOrderData((prevOrderState) => {
            const updateOrder = [...prevOrderState.orders];
            const ind = updateOrder.findIndex((el) => el.phSlug === phSlug);
            const updateProducts = [...updateOrder[ind].products];
            const productIndex = updateProducts.findIndex(
                (el) => el.slug === prSlug
            );
            if (updateProducts[productIndex].count > 1) {
                updateProducts[productIndex].count--;
            } else {
                updateProducts[productIndex].splice(productIndex, 1);
            }

            return {
                ...prevOrderState,

                orders: updateOrder,
            };
        });
    };

    return (
        <AppContext.Provider
            value={{
                ...orderData,
                handleAddItemToCart,
                handleRemoveItemFromCart,
                updateUserData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
