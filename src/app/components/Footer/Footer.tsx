import SectionGrid from "@/components/SectionGrid";
import InlineTextLink from "@/components/InlineTextLink";

export interface FooterProps {}

export default function Footer(props: FooterProps) {
    return (
        <SectionGrid className={"border-t border-neutral-300 bg-black py-4 text-base text-white lg:py-4"}>
            <div className={"col-content lg:col-span-6 lg:col-start-2"}>
                <p>Design, Development and content by Raphael Höps.</p>
                <p>
                    Full website code on <InlineTextLink href={"https://github.com/Giraphi/hp23"}>Github</InlineTextLink>.
                </p>
            </div>

            <div className={"col-content lg:col-span-6 lg:col-start-8 "}>
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
