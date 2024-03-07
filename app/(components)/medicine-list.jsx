import MedicineCard from "./medicine-card";

export default function MedicineList({ items, pharmacy }) {
    //  console.log(items);

    return (
        <ul className="flex justify-start gap-2 flex-wrap p-2">
            {items.map((el) => (
                <li key={el.slug}>
                    <MedicineCard product={el} pharmacy={pharmacy} />
                </li>
            ))}
        </ul>
    );
}
