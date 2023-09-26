import Intro from "@/app/components/Intro/Intro";
import Projects from "@/app/components/Projects/Projects";
import Skills from "@/app/components/Skills/Skills";
import CodeExamples from "@/app/components/CodeExamples/CodeExamples";
import AboutMe from "@/app/components/AboutMe/AboutMe";
import WavesBackground from "@/app/components/AboutMe/WavesBackground/WavesBackground";
import Footer from "@/app/components/Footer/Footer";
import HomeNavigation from "@/app/components/HomeNavigation";
import OverlayDialog from "@/components/OverlayDialog";
import TechAndDesignOverlay from "@/app/components/TechAndDesignOverlay";
import { ModalSearchParams } from "@/assets/modalSearchParams";
import PresentationOverlay from "@/app/components/PresentationOverlay";

export interface HomeProps {
    searchParams: Record<string, string> | null | undefined;
}

export default function Home(props: HomeProps) {
    const modalKey: string | undefined = props.searchParams?.modal;

    return (
        <>
            <HomeNavigation />
            <main>
                <Intro />
                <Projects />
                <Skills />
                <CodeExamples />
                <WavesBackground>
                    <AboutMe />
                </WavesBackground>
            </main>
            <Footer />

            <OverlayDialog open={modalKey === ModalSearchParams.techAndDesign}>
                <TechAndDesignOverlay />
            </OverlayDialog>

            <OverlayDialog open={modalKey === ModalSearchParams.presentation}>
                <PresentationOverlay />
            </OverlayDialog>
        </>
    );
}
