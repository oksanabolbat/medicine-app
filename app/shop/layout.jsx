import PharmaciesNav from "../(components)/pharmacies-nav";

const ShopLayout = ({ children }) => {
    return (
        <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
            <PharmaciesNav />
            <div className="divide-y divide-gray-200 lg:col-span-9">
                {children}
            </div>
        </div>
    );
};
export default ShopLayout;
