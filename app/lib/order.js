import { redirect } from "next/navigation";

export const placeOrderHandler = async (formData) => {
    "use server";

    const details = JSON.parse(formData.get("order"));
    const sum = Number(details.sum);

    const orderData = {
        slug: formData.get("user_name") + String(new Date()),
        user_name: formData.get("user_name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        sum,
        pharmacy: details.pharmacy,
        items_count: details.items_count,
        order: details.products,
    };

    const res = await fetch(`${process.env.BASE_URL}/api/order`, {
        method: "POST",
        body: JSON.stringify({ orderData }),
        "context-type": "application/json",
    });
    if (!res.ok) {
        throw new Error("Failed to place your Order");
    } else {
        redirect(`/order/placed/${details.pharmacy}`);
    }
};
