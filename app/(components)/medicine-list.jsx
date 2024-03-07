import MedicineCard from "./medicine-card";
import MedicinePhCard from "./medicine-ph-card";

export default function MedicineList({ items, pharmacy }) {
    //  console.log(items);

    return (
        <ul className="flex justify-start gap-2 flex-wrap p-2">
            {items.map((el) => (
                <li key={el.slug}>
                    {pharmacy ? (
                        <MedicinePhCard product={el} />
                    ) : (
                        <MedicineCard product={el} />
                    )}
                </li>
            ))}
        </ul>
    );
}
