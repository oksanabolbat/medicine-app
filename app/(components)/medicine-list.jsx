import MedicineCard from "./medicine-card";

export default function MedicineList({ items }) {
    //  console.log(items);

    return (
        <ul className="flex justify-start gap-2 flex-wrap p-2">
            {items.map((el) => (
                <li key={el.slug}>
                    <MedicineCard product={el} />
                </li>
            ))}
        </ul>
    );
}
