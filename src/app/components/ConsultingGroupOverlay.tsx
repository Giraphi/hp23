import Link from "next/link";
import SectionBackground from "@/src/components/SectionBackground";
import SectionGrid from "@/src/components/SectionGrid";
import OverlayTopBar from "@/src/components/OverlayPage/OverlayTopBar";
import OverlayPage from "@/src/components/OverlayPage/OverlayPage";

export interface ConsultingGroupModalProps {}

export default function ConsultingGroupOverlay(props: ConsultingGroupModalProps) {
    return (
        <OverlayPage>
            <div className={"col-span-4 col-start-2 mb-20"}>
                <h1>hello</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2 mb-20"}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2  mb-20 "}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2  mb-20"}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2  mb-20"}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2  mb-20"}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2  mb-20"}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2  mb-20"}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2  mb-20"}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
            <div className={"col-span-4 col-start-2  mb-20"}>
                <h1>secondROOW</h1>
                <Link href={"/"}>Close</Link>
            </div>
        </OverlayPage>
    );
}
