"use server";

import axios from "axios";
import { redirect } from "next/navigation";

export const createOrder = async (orderDetails) => {
    const orderData = {
        slug: "test try",
        user_name: orderDetails.user_name,
        email: orderDetails.email,
        phone: orderDetails.phone,
        address: orderDetails.address,
        sum: orderDetails.sum,
        pharmacy: orderDetails.pharmacy,
        items_count: orderDetails.items_count,
        order: orderDetails.order,
    };
    console.log("path ", `${process.env.BASE_URL}/api/order`);
    try {
        const res = await axios.post(
            `${process.env.BASE_URL}/api/order`,
            { orderData },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("res", res.data);
        // res.status(200).json(res.data);
        // redirect(`/order/placed/${orderData.pharmacy}`);
        if (res.status === 200) {
            return orderData.pharmacy;
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to place your Order");
    }
    // console.log("res ", res);
    // const res = await fetch(`${process.env.BASE_URL}/api/order`, {
    //     method: "POST",
    //     body: JSON.stringify({ orderData: orderData }),
    //     "context-type": "application/json",
    // });
    // if (!res.ok) {
    // } else {
    // }
};
