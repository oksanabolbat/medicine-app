import Basket from "../(components)/basket";
import MainForm from "../(components)/cart/main-form";

export default function ShoppingCart() {
    return (
        <>
            <div className="divide-y divide-gray-200 lg:col-span-6 ">
                <h2 className="text-lg font-medium leading-6 text-gray-90 my-4">
                    Your cart
                </h2>
                <MainForm />
            </div>
            <div className="divide-y divide-gray-200 lg:col-span-6">
                <Basket />
            </div>
        </>
    );
}
