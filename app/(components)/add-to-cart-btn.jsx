"use client";

import { useAppContext } from "@/app/(context)";

import Button from "./ui/button";

const AddToCartBtn = ({ phSlug, price, productData }) => {
    const { handleAddItemToCart } = useAppContext();

    return (
        <Button
            onClick={() =>
                handleAddItemToCart(
                    productData.slug,
                    phSlug,
                    price,
                    productData
                )
            }
        >
            Add to cart
        </Button>
    );
};

export default AddToCartBtn;
