import Image from "next/image";
import Button from "./ui/button";
import { useAppContext } from "../(context)";

const OrderProduct = ({ product, phSlug }) => {
    const { handleAddItemToCart, handleRemoveItemFromCart, medicines } =
        useAppContext();
    const productData = medicines[product.slug];

    return (
        <div className="min-h-32 w-100 dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md p-2 mb-1">
            <div className="flex flex-wrap align-middle justify-between">
                <div className="sx:w-100 w-2/3 p-1 text-left flex flex-col justify-between">
                    <p>{productData.title}</p>
                    <div className="flex justify-between font-semibold">
                        <p className="italic">
                            {product.price}$ x {product.count}
                        </p>

                        <p>{(product.price * product.count).toFixed(2)}$</p>
                    </div>
                </div>
                <div className="sx:w-100 max-w-1/3">
                    <Image
                        src={productData.image}
                        width={100}
                        height={100}
                        alt={productData.title}
                    />
                </div>
            </div>

            <div className="flex justify-end gap-5 mt-2">
                <Button
                    onClick={() =>
                        handleAddItemToCart(product.slug, phSlug, product.price)
                    }
                >
                    {" "}
                    +{" "}
                </Button>
                <Button
                    onClick={() =>
                        handleRemoveItemFromCart(product.slug, phSlug)
                    }
                >
                    {" "}
                    -{" "}
                </Button>
            </div>
        </div>
    );
};

export default OrderProduct;
