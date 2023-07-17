import "./globals.css";
import { Dela_Gothic_One, Inter, Source_Code_Pro } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const delaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: "400", variable: "--font-dela-gothic-one" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code-pro" });

export const metadata = {
    title: "Title",
    description: "Portfolio Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${sourceCodePro.variable} ${delaGothicOne.variable}`}
        >
            <body className={"font-mono text-base text-white lg:text-xl"}>{children}</body>
        </html>
    );
}
