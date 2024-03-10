import AddToCartBtn from "./add-to-cart-btn";
import MedicineCard from "./medicine-card";

const MedicinePhCard = ({ product, pharmacy }) => {
    return (
        <MedicineCard product={product}>
            <div className="text-xs flex justify-center  mt-1">
                <div>
                    <p className="text-center text-xs font-semibold flex justify-center gap-2 my-2">
                        {product.price}$
                    </p>
                    <AddToCartBtn
                        prSlug={product}
                        phSlug={pharmacy}
                        price={5}
                    />
                </div>
            </div>
        </MedicineCard>
    );
};
export default MedicinePhCard;
