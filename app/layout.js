import { Inter } from "next/font/google";
import "./globals.css";

import PharmaciesNav from "./(components)/pharmacies-nav";
import Header from "./(components)/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Medicine delivery",
    description: "Medicine delivery",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <Header />
                <main className="-mt-32 relative px-10">
                    <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16 overflow-hidden rounded-lg bg-white shadow mt-4">
                        <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
                            <PharmaciesNav />
                            <div className="divide-y divide-gray-200 lg:col-span-9">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}
