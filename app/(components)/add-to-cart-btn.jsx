"use client";

import { useAppContext } from "@/app/(context)";

const AddToCartBtn = () => {
    const { basketCount, setBasketCount } = useAppContext();
    const addBtnHandler = () => {
        setBasketCount((prev) => prev + 1);
    };

    return (
        <button
            className=" px-3 py-2   bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded-xl text-white hover:text-inherit transition-all duration-500"
            onClick={addBtnHandler}
        >
            Add to cart
        </button>
    );
};

export default AddToCartBtn;
