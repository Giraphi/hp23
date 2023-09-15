import SectionGrid from "@/src/components/SectionGrid";
import InlineTextLink from "@/src/components/InlineTextLink";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
    return (
        <SectionGrid className={"text-md border-t border-gray-c bg-gray-4 pb-4 pt-4 text-base text-white lg:pb-4 lg:pt-4"}>
            <div className={"col-content pb-4 lg:col-span-6 lg:col-start-2 lg:row-span-2"}>
                <h3 className={"font-bold"}>References</h3>
                <ul className={"list-disc pl-4"}>
                    <li>
                        Raw 3D scan for intro component made with <InlineTextLink href={"https://www.scandy.co/"}>Scandy</InlineTextLink>.
                    </li>
                    <li>
                        Wave animations based on svgs made with <InlineTextLink href={"https://haikei.app/"}>Haikei</InlineTextLink>.
                    </li>
                    <li>
                        Usage of images from <InlineTextLink href={"https://unsplash.com/"}>Unspash</InlineTextLink>.
                    </li>
                    <li>
                        Video in scroll component by{" "}
                        <InlineTextLink href={"https://www.pexels.com/video/4667217/"}>Oleg Scherbak</InlineTextLink>.
                    </li>
                </ul>
            </div>

            <div className={"col-content pb-4 lg:col-span-6 lg:col-start-8 lg:row-span-1 lg:row-start-1"}>
                <h3 className={"font-bold"}>About this site</h3>
                <ul className={"list-disc pl-4"}>
                    <li>Design, Development and content by Raphael Höps.</li>
                    <li>
                        Full website code on <InlineTextLink href={"https://github.com/Giraphi/hp23"}>Github</InlineTextLink>.
                    </li>
                </ul>
            </div>

            <div className={"col-content lg:col-span-6 lg:col-start-8 lg:row-start-2"}>
                <div>
                    Also visit my previous <InlineTextLink>Website</InlineTextLink> from 2020.
                </div>
                <div>
                    <InlineTextLink>Imprint</InlineTextLink> | <InlineTextLink>Data Privacy</InlineTextLink>
                </div>
            </div>
        </SectionGrid>
    );
}
