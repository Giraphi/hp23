import SkillItemsGroup from "@/src/components/Sections/Skills/SkillItems/SkillItemsGroup";
import SkillItem from "@/src/components/Sections/Skills/SkillItems/SkillItem";
import HtmlIcon from "@/src/assets/skills/html.svg";
import CssIcon from "@/src/assets/skills/css.svg";
import JsIcon from "@/src/assets/skills/js.svg";
import NextjsIcon from "@/src/assets/skills/nextjs.svg";
import ViteIcon from "@/src/assets/skills/vite.svg";
import ReactIcon from "@/src/assets/skills/react.svg";
import FramerMotionIcon from "@/src/assets/skills/framer-motion.webp";
import TailwindIcon from "@/src/assets/skills/tailwind.svg";
import SCIcon from "@/src/assets/skills/styled-components.png";
import SassIcon from "@/src/assets/skills/sass.svg";
import dreiIcon from "@/src/assets/skills/drei.png";
import ThreejsIcon from "@/src/assets/skills/threejs.svg";
import ImmerIcon from "@/src/assets/skills/immer.svg";
import ReduxIcon from "@/src/assets/skills/redux.svg";
import ZustandIcon from "@/src/assets/skills/zustand.ico";
import TsIcon from "@/src/assets/skills/ts.svg";

export interface SkillItemsProps {}

export default function SkillItems(props: SkillItemsProps) {
    return (
        <div className={"flex flex-col flex-wrap gap-4 rounded-2xl bg-gray-1 p-4 md:flex-row md:gap-8 md:p-8"}>
            <SkillItemsGroup text={"Fundamentals"}>
                <SkillItem
                    Icon={HtmlIcon}
                    href={"https://de.wikipedia.org/wiki/Hypertext_Markup_Language"}
                >
                    HTML
                </SkillItem>
                <SkillItem
                    Icon={CssIcon}
                    href={"https://de.wikipedia.org/wiki/Cascading_Style_Sheets"}
                >
                    CSS
                </SkillItem>
                <SkillItem
                    Icon={JsIcon}
                    href={"https://de.wikipedia.org/wiki/JavaScript"}
                >
                    JS
                </SkillItem>{" "}
                <SkillItem
                    Icon={TsIcon}
                    href={"https://de.wikipedia.org/wiki/TypeScript"}
                >
                    TS
                </SkillItem>
            </SkillItemsGroup>

            <SkillItemsGroup text={"Tooling and High Level"}>
                <SkillItem
                    Icon={NextjsIcon}
                    href={"https://nextjs.org/"}
                >
                    Next.js
                </SkillItem>
                <SkillItem
                    Icon={ViteIcon}
                    href={"https://vitejs.dev/"}
                >
                    Vite
                </SkillItem>
            </SkillItemsGroup>

            <SkillItemsGroup text={"UI"}>
                <SkillItem
                    Icon={ReactIcon}
                    href={"https://react.dev/"}
                >
                    React
                </SkillItem>
            </SkillItemsGroup>

            <SkillItemsGroup text={"State and data management"}>
                <SkillItem
                    iconImage={ZustandIcon}
                    href={"https://docs.pmnd.rs/zustand/getting-started/introduction"}
                >
                    Zustand
                </SkillItem>
                <SkillItem
                    Icon={ImmerIcon}
                    href={"https://immerjs.github.io/immer/"}
                >
                    Immer
                </SkillItem>
                <SkillItem
                    Icon={ReduxIcon}
                    href={"https://redux.js.org/"}
                >
                    Redux
                </SkillItem>
            </SkillItemsGroup>

            <SkillItemsGroup text={"Animation"}>
                <SkillItem
                    href={"https://www.framer.com/motion/"}
                    iconImage={FramerMotionIcon}
                >
                    Framer Motion
                </SkillItem>
            </SkillItemsGroup>

            <SkillItemsGroup text={"Styling"}>
                <SkillItem
                    Icon={TailwindIcon}
                    href={"https://tailwindcss.com/"}
                >
                    Tailwind CSS
                </SkillItem>
                <SkillItem
                    iconImage={SCIcon}
                    href={"https://styled-components.com/"}
                >
                    Styled Components
                </SkillItem>
                <SkillItem
                    Icon={SassIcon}
                    href={"https://nextjs.org/docs/app/building-your-application/styling/sass"}
                >
                    SCSS Modules
                </SkillItem>
            </SkillItemsGroup>

            <SkillItemsGroup text={"3D"}>
                <SkillItem
                    Icon={ThreejsIcon}
                    href={"https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"}
                >
                    Three.js / R3F
                </SkillItem>
                <SkillItem
                    href={"https://github.com/pmndrs/drei#readme"}
                    iconImage={dreiIcon}
                >
                    Drei
                </SkillItem>
            </SkillItemsGroup>
        </div>
    );
}
