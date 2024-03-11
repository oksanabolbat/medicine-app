"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
    const defaultValue = {
        contactForm: {
            name: "",
            email: "",
            phone: "",
            address: "",
            isReady: false,
        },
        orders: [], // {phSlug, products:{slug, count, price}[], date, totalCount, totalSum }[]
        medicines: {},
    };
    const [orderData, setOrderData] = useState(defaultValue);
    const [medicines, setMedicines] = useState({});

    const updateUserData = ({ name, email, phone, address }, toEdit) => {
        setOrderData((prev) => {
            const isReady = !toEdit
                ? false
                : address.trim() !== "" &&
                  name.trim() !== "" &&
                  email.trim() !== "" &&
                  phone.trim() !== "";

            return {
                ...prev,
                contactForm: { name, email, phone, address, isReady },
            };
        });
    };

    const handleAddItemToCart = (prSlug, phSlug, price, product) => {
        if (product) {
            medicines[product.slug] = product;
        }
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
            const orders = prevOrderState.orders;
            const phInd = orders.findIndex(
                (orders) => orders.phSlug === phSlug
            );
            const products = orders[phInd].products;
            const productInd = products.findIndex(
                (product) => product.slug === prSlug
            );

            if (products[productInd].count > 1) {
                return {
                    ...prevOrderState,

                    orders: orders.map((order, i) =>
                        i === phInd
                            ? {
                                  ...order,
                                  products: order.products.map((product, i) =>
                                      i === productInd
                                          ? {
                                                ...product,
                                                count: product.count - 1,
                                            }
                                          : product
                                  ),
                              }
                            : order
                    ),
                };
            }

            const filteredProducts = products.filter(
                (_, i) => i !== productInd
            );
            const filteredPhs = filteredProducts.length
                ? orders.map((order, i) =>
                      i === phInd
                          ? {
                                ...order,
                                products: filteredProducts,
                            }
                          : order
                  )
                : orders.filter((_, i) => i !== phInd);

            return {
                ...prevOrderState,

                orders: filteredPhs,
            };
        });
    };
    const updateMedicines = (medicines) => {
        const allMedicines = {};
        medicines.forEach(
            (medicine) => (allMedicines[medicine.slug] = medicine)
        );
        setMedicines(allMedicines);
    };
    return (
        <AppContext.Provider
            value={{
                ...orderData,
                handleAddItemToCart,
                handleRemoveItemFromCart,
                updateUserData,
                medicines,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
