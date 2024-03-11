import Order from "@/app/(models)/Order";

import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const orderData = body.orderData;
        console.log("ORDER DATA ", orderData);
        await Order.create(orderData);
        const response = NextResponse.json(
            { message: "Order placed" },
            { status: 200 }
        );
        response.headers.set(200, 0);
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
