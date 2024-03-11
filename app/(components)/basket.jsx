"use client";

import OrderProduct from "./order-product";
import { useAppContext } from "../(context)";
import OrderGenerated from "./order-generated";
import { useState } from "react";

const Basket = () => {
    const { orders } = useAppContext();
    const [orderConfirmed, setOrderConfirmed] = useState("false");
    const [selectedPh, setSelectedPh] = useState();

    const placeOrderHandler = (e, phSlug) => {
        e.preventDefault();
        setOrderConfirmed(true);
        setSelectedPh(phSlug);
    };

    if (orderConfirmed === true) {
        return <OrderGenerated phSlug={selectedPh} />;
    }

    return (
        <div className="p-2">
            {orders.length === 0 && <p>You haven't added any items yet ...</p>}

            {orders.map((order) => (
                <div>
                    <h3 className="font-semibold text-sky-900 uppercase">
                        {order.phSlug}
                    </h3>
                    {order.products.map((product) => (
                        <OrderProduct
                            key={`order-prod-${order.phSlug}-${product.slug}`}
                            product={product}
                            phSlug={order.phSlug}
                        />
                    ))}
                    <div className="flex justify-between font-semibold italic mt-2">
                        <p className="font-semibold italic">
                            Total:{" "}
                            {order.products
                                .reduce(
                                    (acc, product) =>
                                        (acc += product.price * product.count),
                                    0
                                )
                                .toFixed(2)}
                            $
                        </p>
                        <button
                            className="text-sky-800 hover:text-sky-400 bg-sky-50 py-2 px-10 rounded-md italic"
                            onClick={(e) => placeOrderHandler(e, order.phSlug)}
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
