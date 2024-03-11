import { createOrder } from "../lib/order";
import Button from "./ui/button";

const { useAppContext } = require("../(context)");

const OrderGenerated = ({ phSlug }) => {
    const { orders, contactForm } = useAppContext();
    const selectedOrder = orders.find((order) => order.phSlug === phSlug);
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
                    onClick={async () => {
                        await createOrder({
                            user_name: contactForm.name,
                            email: contactForm.email,
                            phone: contactForm.phone,
                            address: contactForm.address,
                            sum: orderSum,
                            pharmacy: phSlug,
                            items_count: totalItems,
                            order: orderInfo,
                        });
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
