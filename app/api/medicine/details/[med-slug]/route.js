import Medicine from "@/app/(models)/Medicine";

import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const medSlug = params.med_slug;

    try {
        //[{product_slug, price}]
        const productData = await Medicine.findOne({ slug: medSlug });

        return NextResponse.json(productData, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
