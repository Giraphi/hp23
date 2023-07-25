import React from "react";
import SectionGrid from "@/app/components/SectionGrid";
import TextLink from "@/app/components/TextLink";
import SectionBackground from "@/app/components/SectionBackground";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
    return (
        <SectionGrid className={"text-md border-t bg-gray-4 pb-4 pt-4 text-base text-white lg:pb-4 lg:pt-4"}>
            <div className={"col-content pb-4 lg:col-span-6 lg:col-start-2 lg:row-span-2"}>
                <h3 className={"font-bold"}>References</h3>
                <ul className={"list-disc pl-4"}>
                    <li>
                        Raw 3D scan for intro component made with <TextLink href={"https://www.scandy.co/"}>Scandy</TextLink>.
                    </li>
                    <li>
                        Wave animations based on svgs made with <TextLink href={"https://haikei.app/"}>Haikei</TextLink>.
                    </li>
                    <li>
                        Usage of images from <TextLink href={"https://unsplash.com/"}>Unspash</TextLink>.
                    </li>
                    <li>
                        Video in scroll component by <TextLink href={"https://www.pexels.com/video/4667217/"}>Oleg Scherbak</TextLink>.
                    </li>
                </ul>
            </div>

            <div className={"col-content pb-4 lg:col-span-6 lg:col-start-8 lg:row-span-1 lg:row-start-1"}>
                <h3 className={"font-bold"}>About this site</h3>
                <ul className={"list-disc pl-4"}>
                    <li>Design, Development and content by Raphael Höps.</li>
                    <li>
                        Full website code on <TextLink href={"https://github.com/Giraphi/hp23"}>Github</TextLink>.
                    </li>
                </ul>
            </div>

            <div className={"col-content lg:col-span-6 lg:col-start-8 lg:row-start-2"}>
                <div>
                    Also visit my previous <TextLink>Website</TextLink> from 2020.
                </div>
                <div>
                    <TextLink>Imprint</TextLink> | <TextLink>Data Privacy</TextLink>
                </div>
                <div></div>
            </div>
        </SectionGrid>
    );
}
