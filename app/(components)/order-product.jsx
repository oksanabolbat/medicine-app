import Image from "next/image";
import Button from "./ui/button";
import { useAppContext } from "../(context)";
import { getMedicineDetails } from "../lib/data";

const OrderProduct = ({ product, phSlug }) => {
    //product title, image

    const { handleAddItemToCart, handleRemoveItemFromCart } = useAppContext();
    // useEffect(() => {}, []);
    // const productDetails = getMedicineDetails(product.slug)
    //     .then((res) => console.log(res))
    //     .then((res) => console.log(res.data));
    // console.log(productDetails);

    return (
        <div className="min-h-32 w-100 dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md p-2 mb-1">
            <div className="flex flex-wrap align-middle justify-between">
                <div className="sx:w-100 w-2/3 p-1 text-left flex flex-col justify-between">
                    <p>{product.title}</p>
                    <div className="flex justify-between font-semibold">
                        <p className="italic">
                            {product.price}$ x {product.count}
                        </p>

                        <p>{"total"}$</p>
                    </div>
                </div>
                <div className="sx:w-100 max-w-1/3">
                    <Image
                        src={product.image}
                        width={100}
                        height={100}
                        alt={product.title}
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
