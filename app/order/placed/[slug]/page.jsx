"use client";

import { useAppContext } from "@/app/(context)";
import { getBasketCount, sendOrder } from "@/app/lib/storage";

export default async function Page({ params }) {
    const { setBasketCount } = useAppContext();

    sendOrder(params.slug);
    setBasketCount(getBasketCount());
    return (
        <div className="py-24 text-center font-semibold">
            <p>Thank you! Your order has been placed ({params.slug})</p>
        </div>
    );
}
