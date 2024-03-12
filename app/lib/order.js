"use server";

import axios from "axios";
import { ObjectId } from "mongodb";

export const createOrder = async (orderDetails) => {
    const objId = new ObjectId();
    console.log("ObjectId: ", objId);
    const orderData = {
        _id: objId,
        user_name: orderDetails.user_name,
        email: orderDetails.email,
        phone: orderDetails.phone,
        address: orderDetails.address,
        sum: orderDetails.sum,
        pharmacy: orderDetails.pharmacy,
        items_count: orderDetails.items_count,
        order: orderDetails.order,
    };

    try {
        const res = await axios.post(`${process.env.BASE_URL}/api/order`, {
            orderData,
        });

        if (res.status === 200) {
            return { orderId: objId.toString() };
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to place your Order");
    }
};
