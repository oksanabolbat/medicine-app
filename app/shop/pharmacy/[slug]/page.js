//import MedicineList from "@/components/medicine-list";
//import { getMedicines } from "@/lib/data";

export default function Page({ params }) {
    // const medicines = getMedicines(params.slug);

    return (
        <div>
            {/* <MedicineList items={medicines} /> */}
            <p>hello {params.slug}</p>
        </div>
    );
}
