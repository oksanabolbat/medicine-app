"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClasses =
    "bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700 group border-l-4 px-3 py-2 flex items-center text-sm font-medium";
const activeLinkClasses =
    "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium";

export default function NavPharmacyLink({ href, children }) {
    const currPath = usePathname();
    console.log(currPath);
    return (
        <Link
            href={href}
            className={
                currPath.includes(href) ? linkClasses : activeLinkClasses
            }
        >
            {children}
        </Link>
    );
}
