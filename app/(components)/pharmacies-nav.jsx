//import { getPharmacies } from "@/lib/data";
import { getPharmacies } from "../lib/data";
import NavPharmacyLink from "./nav-pharmacy-link";

export default async function PharmaciesNav() {
    const { pharmacies } = await getPharmacies();
    return (
        <aside className="py-6 lg:col-span-3">
            <nav className="p-4 space-y-2">
                {pharmacies.map((pharmacy) => (
                    <NavPharmacyLink
                        href={`/shop/pharmacy/${pharmacy.slug}`}
                        key={pharmacy.slug}
                    >
                        {pharmacy.title}
                    </NavPharmacyLink>
                ))}
            </nav>
        </aside>
    );
}
