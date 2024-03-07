"use client";

import { getBasketData } from "../lib/storage";
import OrderProduct from "./order-product";
import Order from "./order-product";

const Basket = () => {
    const basketData = getBasketData();

    //pharmacy=> products arr

    //get pharmacies
    const pharmacies = [...new Set(basketData.map((el) => el.phSlug))];
    console.log(pharmacies);

    return (
        <div className="p-2">
            {/* {pharmacies.map((el) => (
                <p>el</p>
            ))} */}
            {basketData.length === 0 && (
                <p>You haven't added any items yet ...</p>
            )}

            {pharmacies.map((el) => (
                <div key={el}>
                    <h3 className="font-semibold text-sky-900">{el}</h3>
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
                </div>
            ))}
        </div>
    );
};

export default Basket;
