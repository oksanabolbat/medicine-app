import Image from "next/image";
import AddToCartBtn from "./add-to-cart-btn";
import MedicineCard from "./medicine-card";

const MedicinePhCard = ({ product }) => {
    return (
        <MedicineCard product={product}>
            <div className="text-xs flex justify-center  mt-1">
                <div>
                    <p className="text-center text-xs font-semibold flex justify-center gap-2 my-2">
                        {product.price}$
                    </p>
                    <AddToCartBtn />
                </div>
            </div>
        </MedicineCard>
    );
};
export default MedicinePhCard;
