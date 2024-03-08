import { placeOrderHandler } from "../lib/order";

const CartLayout = ({ children }) => {
    return (
        <form
            className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x"
            action={placeOrderHandler}
        >
            {children}
        </form>
    );
};

export default CartLayout;
