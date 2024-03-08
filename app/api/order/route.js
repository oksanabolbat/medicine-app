import Order from "@/app/(models)/Order";
import { sendOrder } from "@/app/lib/storage";

import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const orderData = body.orderData;
        console.log("ORDER DATA ", orderData);
        await Order.create(orderData);

        return NextResponse.json({ message: "Order placed" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
