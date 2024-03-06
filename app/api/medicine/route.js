import Medicine from "@/app/(models)/Medicine";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const medicines = await Medicine.find();

        return NextResponse.json({ medicines }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
