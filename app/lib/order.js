"use server";

import { redirect } from "next/navigation";

export const createOrder = async (orderDetails) => {
    const orderData = {
        slug: orderDetails.user_name + String(new Date()),
        user_name: orderDetails.user_name,
        email: orderDetails.email,
        phone: orderDetails.phone,
        address: orderDetails.address,
        sum: orderDetails.sum,
        pharmacy: orderDetails.pharmacy,
        items_count: orderDetails.items_count,
        order: orderDetails.order,
    };

    const res = await fetch(`${process.env.BASE_URL}/api/order`, {
        method: "POST",
        body: JSON.stringify({ orderData: orderData }),
        "context-type": "application/json",
    });
    if (!res.ok) {
        throw new Error("Failed to place your Order");
    } else {
        redirect(`/order/placed/${orderData.pharmacy}`);
    }
};
