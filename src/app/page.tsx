import Intro from "@/src/app/components/Intro/Intro";
import Projects from "@/src/app/components/Projects/Projects";
import Skills from "@/src/app/components/Skills/Skills";
import CodeExamples from "@/src/app/components/CodeExamples/CodeExamples";
import AboutMe from "@/src/app/components/AboutMe/AboutMe";
import WavesBackground from "@/src/app/components/AboutMe/WavesBackground/WavesBackground";
import Footer from "@/src/app/components/Footer/Footer";
import HomeNavigation from "@/src/app/components/HomeNavigation";
import OverlayDialog from "@/src/components/OverlayDialog";
import TechAndDesignOverlay from "@/src/app/components/TechAndDesignOverlay";
import { ModalSearchParams } from "@/src/assets/modalSearchParams";

export interface HomeProps {
    searchParams: Record<string, string> | null | undefined;
}

export default function Home(props: HomeProps) {
    const modalKey: string | undefined = props.searchParams?.modal;

    return (
        <>
            <HomeNavigation />
            <main>
                {/*<Intro />*/}
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
        </>
    );
}
