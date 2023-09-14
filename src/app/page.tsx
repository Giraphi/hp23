import Intro from "@/src/components/Sections/Intro/Intro";
import Projects from "@/src/components/Sections/Projects/Projects";
import Skills from "@/src/components/Sections/Skills/Skills";
import CodeExamples from "@/src/components/Sections/CodeExamples/CodeExamples";
import AboutMe from "@/src/components/Sections/AboutMe/AboutMe";
import WavesBackground from "@/src/components/Sections/AboutMe/WavesBackground/WavesBackground";
import Footer from "@/src/components/Sections/Footer/Footer";
import PageNavigation from "@/src/components/PageNavigation/PageNavigation";
import { SectionId } from "@/src/store/useActiveSectionStore";

export default function Home() {
    return (
        <>
            <PageNavigation
                items={[
                    { id: SectionId.intro, label: "Intro" },
                    { id: SectionId.projects, label: "Projects" },
                    { id: SectionId.skills, label: "Skills" },
                    { id: SectionId.codeExamples, label: "Code Examples" },
                    { id: SectionId.aboutMe, label: "About Me" },
                ]}
            />
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
