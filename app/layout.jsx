import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./(components)/header/header";
import { AppWrapper } from "./(context)";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Medicine delivery",
    description: "Medicine delivery",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-100`}>
                <AppWrapper>
                    <Header />
                    <main className="-mt-32 relative px-10">
                        <div className="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16 overflow-hidden rounded-lg bg-white shadow mt-4">
                            {children}
                        </div>
                    </main>
                </AppWrapper>
            </body>
        </html>
    );
}
