"use client";

import { useState } from "react";
import { getBasketData } from "../lib/storage";
import OrderProduct from "./order-product";

const Basket = () => {
    const basketData = getBasketData();
    const [orderDataJson, setOrderDataJson] = useState("");

    const pharmacies = [...new Set(basketData.map((el) => el.phSlug))];

    const createOrderHandler = (phSlug) => {
        const products = getBasketData()
            .filter((el) => el.phSlug === phSlug && el.count > 0)
            .map((el) => ({
                product_slug: el.slug,
                count: el.count,
                price: +el.price,
                total: el.count * Number(el.price),
            }));

        const sum = products.reduce((acc, el) => (acc += +el.total), 0);
        const itemsCount = products.reduce((acc, el) => (acc += el.count), 0);

        const orderData = {
            pharmacy: phSlug,
            sum,
            products,
            items_count: itemsCount,
        };

        setOrderDataJson(JSON.stringify(orderData));
    };
    return (
        <div className="p-2">
            {basketData.length === 0 && (
                <p>You haven't added any items yet ...</p>
            )}

            {pharmacies.map((el) => (
                <div key={el}>
                    <h3 className="font-semibold text-sky-900 uppercase">
                        {el}
                    </h3>
                    {basketData.map((productData) => {
                        if (productData.phSlug === el) {
                            return (
                                <OrderProduct
                                    key={`${el}-${productData.slug}`}
                                    product={productData}
                                />
                            );
                        }
                    })}
                    <div className="flex justify-end">
                        <input
                            name="order"
                            value={orderDataJson}
                            readOnly
                            className="hidden"
                        />
                        <button
                            type="submit"
                            className="italic font-semibold text-purple-800 hover:text-purple-400 mb-4"
                            onClick={() => createOrderHandler(el)}
                            name={`pharmacy:${el}`}
                        >
                            place order
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Basket;
