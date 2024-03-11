"use client";

import { useAppContext } from "@/app/(context)";
import { getBasketCount, sendOrder } from "@/app/lib/storage";

export default async function Page({ params }) {
    // sendOrder(params.slug);

    return (
        <div className="py-24 text-center font-semibold">
            <p>Thank you! Your order has been placed ({params.slug})</p>
        </div>
    );
}
