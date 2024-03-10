"use client";

import OrderProduct from "./order-product";
import { useAppContext } from "../(context)";

const Basket = () => {
    const { orders } = useAppContext();

    return (
        <div className="p-2">
            {orders.length === 0 && <p>You haven't added any items yet ...</p>}

            {orders.map((el) => (
                <div>
                    <h3 className="font-semibold text-sky-900 uppercase">
                        {el.phSlug}
                    </h3>
                    {el.products.map((product) => (
                        <OrderProduct
                            key={`${el.phSlug}-${product.slug}`}
                            product={product}
                            phSlug={el.phSlug}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Basket;
