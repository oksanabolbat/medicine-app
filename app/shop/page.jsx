import MedicineList from "../(components)/medicine-list";
import { getMedicines } from "../lib/data";

export default async function ShopPage() {
    const { medicines } = await getMedicines();

    return (
        <div>
            <MedicineList items={medicines} pharmacy={false} />
        </div>
    );
}
