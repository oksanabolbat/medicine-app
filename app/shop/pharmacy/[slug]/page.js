import MedicineList from "@/app/(components)/medicine-list";

import { getMedicinesInPh } from "@/app/lib/data";

export default async function Page({ params }) {
    const medicines = await getMedicinesInPh(params.slug);

    return (
        <div>
            <p>hello {params.slug}</p>
            <MedicineList items={medicines} />
        </div>
    );
}
