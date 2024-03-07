import Image from "next/image";

export default function MedicineCard({ product, pharmacy }) {
    return (
        <div className="h-96 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200 p-2 flex flex-col justify-around">
            <div className="overflow-hidden p-2 rounded-md">
                <Image
                    src={product.image}
                    width={200}
                    height={200}
                    alt={product.title}
                />
            </div>
            <div className="px-2 py-2">
                <h5 className="text-base font-semibold text-center">
                    {product.title}
                </h5>
            </div>
            {pharmacy && (
                <div className="text-xs flex justify-center  mt-1">
                    <div>
                        <p className="text-center text-xs font-semibold flex justify-center gap-2 my-2">
                            {product.price}$
                        </p>
                        <button className=" px-3 py-2   bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded-xl text-white hover:text-inherit transition-all duration-500">
                            Add to cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
