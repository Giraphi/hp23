import "./globals.scss";
import { Bungee, Dela_Gothic_One, Inter, Source_Code_Pro } from "next/font/google";
import { ReactNode } from "react";
import DeviceStoreHandler from "@/store/DeviceStoreHandler";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const delaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: "400", variable: "--font-dela-gothic-one" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code-pro" });
const bungee = Bungee({ subsets: ["latin"], weight: "400", variable: "--font-bungee" });

export const metadata = {
    title: "Raphael Höps",
    description: "Raphael Höps - Portfolio Site",
    viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${sourceCodePro.variable} ${delaGothicOne.variable} ${bungee.variable} h-full`}
        >
            <DeviceStoreHandler />
            <body className={"font-mono text-base text-white md:text-xl"}>{children}</body>
        </html>
    );
}
