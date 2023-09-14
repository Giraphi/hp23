import Intro from "@/src/components/Sections/Intro/Intro";
import Projects from "@/src/components/Sections/Projects/Projects";
import Skills from "@/src/components/Sections/Skills/Skills";
import CodeExamples from "@/src/components/Sections/CodeExamples/CodeExamples";
import AboutMe from "@/src/components/Sections/AboutMe/AboutMe";
import WavesBackground from "@/src/components/Sections/AboutMe/WavesBackground/WavesBackground";
import Footer from "@/src/components/Sections/Footer/Footer";
import PageNavigation from "@/src/components/PageNavigation/PageNavigation";
import { SectionId } from "@/src/store/useActiveSectionStore";
import HomeNavigation from "@/src/app/components/HomeNavigation";

export default function Home() {
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
        </>
    );
}
