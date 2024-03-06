import Pharmacy from "@/app/(models)/Pharmacy";

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const pharmacies = await Pharmacy.find();
        return NextResponse.json({ pharmacies }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
