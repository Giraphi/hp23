import "./globals.scss";
import { Bungee, Dela_Gothic_One, Inter, Source_Code_Pro } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const delaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: "400", variable: "--font-dela-gothic-one" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code-pro" });
const bungee = Bungee({ subsets: ["latin"], weight: "400", variable: "--font-bungee" });

export const metadata = {
    title: "Title",
    description: "Portfolio Site",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${sourceCodePro.variable} ${delaGothicOne.variable} ${bungee.variable} h-full scroll-smooth`}
        >
            <body className={"font-mono text-base text-white md:text-xl"}>{children}</body>
        </html>
    );
}
