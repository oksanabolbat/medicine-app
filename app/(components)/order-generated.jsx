//import { redirect } from "next/navigation";
import { createOrder } from "../lib/order";
import Button from "./ui/button";
import { useRouter } from "next/navigation";

const { useAppContext } = require("../(context)");

const OrderGenerated = ({ phSlug }) => {
    const { orders, contactForm, handleSendOrder } = useAppContext();
    const router = useRouter();

    const selectedOrder = orders.find((order) => order.phSlug === phSlug);
    if (!selectedOrder) {
        return <></>;
    }
    const orderSum = selectedOrder.products.reduce(
        (acc, product) => (acc += product.price * product.count),
        0
    );
    const totalItems = selectedOrder.products.reduce(
        (acc, product) => (acc += product.count),
        0
    );

    const orderInfo = selectedOrder.products.map((product) => ({
        product_slug: product.slug,
        count: product.count,
        price: product.price,
    }));

    return (
        <div>
            <h3>Please confirm order details:</h3>
            <h4>Contact info</h4>
            <div>
                <p>
                    Neme: {contactForm.name} <br />
                    Email: {contactForm.email} <br />
                    Phone: {contactForm.phone} <br />
                    Address: {contactForm.address} <br />
                </p>
                {selectedOrder.products.map((product) => (
                    <p key={product.slug}>
                        product: {product.slug} - {product.price}%{" "}
                        {product.count}
                    </p>
                ))}
            </div>
            <p>
                Total items: {totalItems || 0} <br />
                Total: {orderSum || 0}
            </p>
            <div>
                <Button
                    onClick={async (e) => {
                        e.preventDefault();
                        const { orderId } = await createOrder({
                            user_name: contactForm.name,
                            email: contactForm.email,
                            phone: contactForm.phone,
                            address: contactForm.address,
                            sum: orderSum,
                            pharmacy: phSlug,
                            items_count: totalItems,
                            order: orderInfo,
                        });

                        handleSendOrder(phSlug);
                        router.push(`/order/placed/${orderId}`);
                    }}
                >
                    ok
                </Button>
                <Button onClick={() => {}}>cancel</Button>
            </div>
        </div>
    );
};
export default OrderGenerated;
