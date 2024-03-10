"use client";

import { useAppContext } from "@/app/(context)";

import Button from "./ui/button";

const AddToCartBtn = ({ prSlug, phSlug, price }) => {
    const { handleAddItemToCart } = useAppContext();

    return (
        <Button onClick={() => handleAddItemToCart(prSlug, phSlug, price)}>
            Add to cart
        </Button>
    );
};

export default AddToCartBtn;
