"use client";
import Link from "next/link";
import { useAppContext } from "@/app/(context)";

const Basket = () => {
    const { basketCount } = useAppContext();

    return (
        <Link
            href="/shopping-cart"
            className="  block relative h-9 hover:bg-sky-800 rounded-md py-1 px-2 w-11 text-white"
        >
            <div className="w-100">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                            d="M20 10L18.5145 17.4276C18.3312 18.3439 18.2396 18.8021 18.0004 19.1448C17.7894 19.447 17.499 19.685 17.1613 19.8326C16.7783 20 16.3111 20 15.3766 20H8.62337C7.6889 20 7.22166 20 6.83869 19.8326C6.50097 19.685 6.2106 19.447 5.99964 19.1448C5.76041 18.8021 5.66878 18.3439 5.48551 17.4276L4 10M3 10H21M8 13V13.01M16 13V13.01M6 10L9 4M18 10L15 4"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>{" "}
                    </g>
                </svg>
                <span className="text-xs absolute top-0.5 right-0.5 inline-block">
                    {basketCount || "7"}
                </span>
            </div>
        </Link>
    );
};
export default Basket;
