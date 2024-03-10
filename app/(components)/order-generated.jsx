const { useAppContext } = require("../(context)");
const { default: Input } = require("./cart/input");

const OrderGenerated = ({ phSlug }) => {
    const { orders, contactForm } = useAppContext();
    const selectedOrder = orders.find((order) => order.phSlug === phSlug);
    console.log("ORDERS ", selectedOrder);
    return (
        <div>
            <h3>Please confirm order details:</h3>
            <h4>Contact info</h4>
            <form>
                <Input
                    id="user_name"
                    name="user_name"
                    readOnly={true}
                    value={contactForm.name}
                />
                <Input
                    id="email"
                    name="email"
                    readOnly={true}
                    value={contactForm.email}
                />
                <Input
                    id="phone"
                    name="phone"
                    readOnly={true}
                    value={contactForm.phone}
                />
                <Input
                    id="address"
                    name="address"
                    readOnly={true}
                    value={contactForm.address}
                />
                {selectedOrder.products.map((product) => (
                    <p>
                        product: {product.slug} - {product.price}%{" "}
                        {product.count}
                    </p>
                ))}
            </form>
        </div>
    );
};
export default OrderGenerated;
