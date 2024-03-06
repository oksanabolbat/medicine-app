"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClasses =
    "hover:bg-sky-800 rounded-md py-2 px-3 text-sm font-medium text-white inline-block";

export default function NavHeaderLink({ href, children }) {
    const currPath = usePathname();
    console.log(currPath);
    return (
        <Link
            href={href}
            className={
                currPath === href || currPath.includes(`${href}/`)
                    ? `${linkClasses} bg-sky-800`
                    : linkClasses
            }
        >
            {children}
        </Link>
    );
}
