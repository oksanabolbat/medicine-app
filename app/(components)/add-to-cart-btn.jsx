"use client";

import { useAppContext } from "@/app/(context)";
import { addMedicine } from "../lib/storage";
import { useParams } from "next/navigation";
import Button from "./ui/button";

const AddToCartBtn = ({ product }) => {
    const { setBasketCount } = useAppContext();
    const { slug } = useParams();
    const addBtnHandler = () => {
        setBasketCount((prev) => prev + 1);
        addMedicine(product, slug);
        // console.log(product);
        // console.log(slug);
    };

    return <Button onClick={addBtnHandler}>Add to cart</Button>;
};

export default AddToCartBtn;
