import MedicineList from "./(components)/medicine-list";
import { getMedicines } from "./lib/data";
//import { getMedicines } from "@/lib/data";

export default async function Home() {
    const { medicines } = await getMedicines();

    return <div>{/* <MedicineList items={medicines} /> */}</div>;
}
