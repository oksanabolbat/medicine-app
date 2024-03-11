import MedicineCard from "./medicine-card";
import MedicinePhCard from "./medicine-ph-card";

export default function MedicineList({ items, pharmacy, phSlug }) {
    return (
        <ul className="flex justify-start gap-2 flex-wrap p-2">
            {items.map((product) => (
                <li key={product.slug}>
                    {pharmacy ? (
                        <MedicinePhCard product={product} phSlug={phSlug} />
                    ) : (
                        <MedicineCard product={product} />
                    )}
                </li>
            ))}
        </ul>
    );
}
