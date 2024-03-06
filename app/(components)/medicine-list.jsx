import MedicineCard from "./medicine-card";

export default function MedicineList({ items }) {
    //  console.log(items);

    return (
        <ul>
            {items.map((el) => (
                <li key={el.slug}>
                    <MedicineCard product={el} />
                </li>
            ))}
        </ul>
    );
}
