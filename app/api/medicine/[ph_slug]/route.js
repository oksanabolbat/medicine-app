import Pharmacy from "@/app/(models)/Pharmacy";
import Medicine from "@/app/(models)/Medicine";

import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const phSlug = params.ph_slug;

    try {
        const medicinesData = await Pharmacy.findOne({ slug: phSlug }); //[{product_slug, price}]
        const allProductsData = await Medicine.find();

        const medicines = medicinesData.medicines?.map((product) => {
            const productDetails = allProductsData.find(
                (el) => el.slug === product.product_slug
            );

            return {
                slug: productDetails.slug,
                title: productDetails.title,
                price: product.price,
                description: productDetails.description,
                image: productDetails.image,
                features: productDetails.features,
                warnings: productDetails.warnings,
                suitable_for: productDetails.suitable_for,
                ingredients: productDetails.ingredients,
                prescription: productDetails.prescription,
                specification: productDetails.specification,
            };
        });

        return NextResponse.json(medicines, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
}
