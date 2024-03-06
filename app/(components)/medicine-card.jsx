import Image from "next/image";
import Link from "next/link";

export default function MedicineCard({ product }) {
    return (
        <div>
            <Link href="/shop">
                <Image
                    src={product.image}
                    width={200}
                    height={200}
                    alt={product.title}
                />
                <span>{product.price}</span>
                <button>add to cart</button>
            </Link>
        </div>
    );
}
