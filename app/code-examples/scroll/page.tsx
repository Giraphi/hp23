import Headline from "@/app/components/Headline";
import SectionBackground from "@/app/components/SectionBackground";
import SectionGrid from "@/app/components/SectionGrid";
import SectionParagraph from "@/app/components/SectionParagraph";
import SectionHeadline from "@/app/components/SectionHeadline";

import StackblitzIframe from "@/app/code-examples/StackblitzIframe";
import CodesandboxIframe from "@/app/code-examples/CodesandboxIframe";

export const metadata = {
    title: "Scroll Component",
    description: "Code Example for a scroll animation component",
};

export default function Page() {
    return (
        <main>
            <SectionBackground>
                <SectionGrid>
                    <div className={"col-content pb-8"}>
                        <Headline className={"text-pink-600"}>Code Deep Dive</Headline>
                        <SectionHeadline>Zoom into text</SectionHeadline>
                        <SectionParagraph>
                            I believe beeing able to quickly adapt to new technologies is one of the most valueabe skills for developers,
                            especially in the rapidly aternating field of web development.
                        </SectionParagraph>
                        <SectionParagraph>
                            That beeing said, I’m always keen on studying new technologies and frameworks to add as much tools to my toolbox
                            as possible.
                        </SectionParagraph>
                    </div>

                    <div className={"col-content overflow-hidden rounded-lg pb-8"}>
                        {/*<StackblitzIframe*/}
                        {/*    src={"https://stackblitz.com/edit/giraphi-scroll-dhu4h9"}*/}
                        {/*    files={["src/App.tsx", "src/ScrollCover/ScrollCover.tsx", "src/ScrollCover/ScrollCoverFront.tsx"]}*/}
                        {/*/>*/}
                        <CodesandboxIframe
                            src={
                                "https://codesandbox.io/p/sandbox/github/Giraphi/scroll/tree/main?file=%2Fsrc%2FScrollCover%2FScrollCover.tsx%3A1%2C1"
                            }
                        />
                    </div>

                    <div className={"col-content"}>
                        <SectionParagraph>
                            I believe beeing able to quickly adapt to new technologies is one of the most valueabe skills for developers,
                            especially in the rapidly aternating field of web development.
                        </SectionParagraph>
                        <SectionParagraph>
                            That beeing said, I’m always keen on studying new technologies and frameworks to add as much tools to my toolbox
                            as possible.
                        </SectionParagraph>
                    </div>
                </SectionGrid>
            </SectionBackground>
            {/*<iframe*/}
            {/*    style={{*/}
            {/*        width: "100%",*/}
            {/*        height: "80vh",*/}
            {/*        outline: "1px solid #252525",*/}
            {/*        border: 0,*/}
            {/*        marginBottom: 16,*/}
            {/*        zIndex: 100,*/}
            {/*    }}*/}
            {/*    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"*/}
            {/*    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"*/}
            {/*    src="https://codesandbox.io/embed/github/Giraphi/scroll/main?"*/}
            {/*></iframe>*/}

            {/*<iframe*/}
            {/*    src={"https://stackblitz.com/edit/giraphi-scroll-dhu4h9?embed=1&file=src%2FApp.tsx&hideExplorer=1"}*/}
            {/*    style={{ width: "100%", height: "70vh" }}*/}
            {/*></iframe>*/}
        </main>
    );
}

// <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);border-radius:2px;" width="800" height="450"
//         src="https://codesandbox.io/p/sandbox/github/Giraphi/scroll/tree/main?embed=1" allowFullScreen></iframe>
