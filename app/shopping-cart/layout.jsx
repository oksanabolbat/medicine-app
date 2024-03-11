const CartLayout = ({ children }) => {
    return (
        <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            {children}
        </div>
    );
};

export default CartLayout;
