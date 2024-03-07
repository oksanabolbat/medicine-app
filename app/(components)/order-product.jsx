"use client";

import { useState } from "react";
import { useAppContext } from "../(context)";
import { updateMedicineCount } from "../lib/storage";
import Image from "next/image";
import Button from "./ui/button";

const OrderProduct = ({ product }) => {
    const { setBasketCount } = useAppContext();
    const [orderProduct, setOrderProduct] = useState({
        count: +product.count,
        price: +product.price,
        total: Number(product.count) * Number(product.price),
    });

    const incBtnHandler = () => {
        updateMedicineCount(product.phSlug, product.slug, true);
        setBasketCount((prev) => prev + 1);
        setOrderProduct((prev) => {
            const count = prev.count++;
            const total = count * prev.price;

            return {
                count,
                price: prev.price,
                total,
            };
        });
    };
    const decrBtnHandler = () => {
        updateMedicineCount(product.phSlug, product.slug);
        setBasketCount((prev) => prev - 1);

        if (orderProduct.count > 0) {
            setOrderProduct((prev) => {
                const count = prev.count--;
                const total = count * prev.price;
                return {
                    count,
                    price: prev.price,
                    total,
                };
            });
        }
    };

    return (
        <div className="min-h-32 w-100 dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md p-2 mb-1">
            <div className="flex flex-wrap align-middle justify-between">
                <div className="sx:w-100 w-2/3 p-1 text-left flex flex-col justify-between">
                    <p>{product.title}</p>
                    <div className="flex justify-between font-semibold">
                        <p className="italic">
                            {orderProduct.price}$ x {orderProduct.count}
                        </p>

                        <p>{orderProduct.total.toFixed(2)}$</p>
                    </div>
                </div>
                <div className="sx:w-100 max-w-1/3">
                    <Image
                        src={product.image}
                        width={100}
                        height={100}
                        alt={product.title}
                    />
                </div>
            </div>

            <div className="flex justify-end gap-5 mt-2">
                <Button onClick={incBtnHandler}> + </Button>
                <Button onClick={decrBtnHandler}> - </Button>
            </div>
        </div>
    );
};

export default OrderProduct;
