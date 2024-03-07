import Image from "next/image";

export default function MedicineCard({ product, children }) {
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
            {children}
        </div>
    );
}
