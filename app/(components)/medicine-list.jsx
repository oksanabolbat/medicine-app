import MedicineCard from "./medicine-card";
import MedicinePhCard from "./medicine-ph-card";

export default function MedicineList({ items, pharmacy, phSlug }) {
    return (
        <ul className="flex justify-start gap-2 flex-wrap p-2">
            {items.map((el) => (
                <li key={el.slug}>
                    {pharmacy ? (
                        <MedicinePhCard product={el} phSlug={phSlug} />
                    ) : (
                        <MedicineCard product={el} />
                    )}
                </li>
            ))}
        </ul>
    );
}
