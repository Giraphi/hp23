import { motion } from "framer-motion";
import { Device, useDeviceStore } from "@/store/useDeviceStore";
import wavePaths from "@/app/components/AboutMe/WavesBackground/paths";

export interface WavesAnimationProps {}

export const wavesEase = [0.45, 0, 0.6, 1];
const pathTransition = { duration: 5, repeat: Infinity, repeatType: "reverse" as "reverse", ease: wavesEase };

export default function WavesAnimation(props: WavesAnimationProps) {
    // viewBox: set up an abstract coordinate system. Svg elements, like paths etc. will refer to that.
    // width/height: Set viewport size, e.g. the canvas within the document layout flow
    // preserveAspectRatio: Define, how the viewBox will be placed and scaled into the canvas.
    //
    // Default is preserveAspectRatio="xMidYMid meet".
    // - meet: scale coordinate system until it fits into the viewport (object-fit: cover)
    // - xMid: center coordinate system on x-axis
    // - YMid: center coordinate system on y-axis. (Note the CAPITAL Y!)
    // We use 'slice' to achieve a result similar to object-fit: contain.

    const { device } = useDeviceStore();
    const paths = device <= Device.md ? wavePaths.high : wavePaths.wide;
    const preserveAspectRatio = device <= Device.md ? "xMinYMid slice" : "xMidYMid slice";
    const viewBox = device <= Device.md ? "0 0 600 900" : "0 0 960 540";

    return (
        <svg
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width={"100%"}
            height={"100%"}
            preserveAspectRatio={preserveAspectRatio}
            key={device}
        >
            <motion.path
                initial={{
                    d: paths[0].start,
                }}
                animate={{
                    d: paths[0].end,
                }}
                transition={{ ...pathTransition, duration: 4 }}
                fill="#ff00aa"
            ></motion.path>
            <motion.path
                initial={{
                    d: paths[1].start,
                }}
                animate={{
                    d: paths[1].end,
                }}
                fill="#bd2180"
                transition={{ ...pathTransition, duration: 2.5 }}
            ></motion.path>
            <motion.path
                initial={{
                    d: paths[2].start,
                }}
                animate={{
                    d: paths[2].end,
                }}
                fill="#7f2458"
                transition={{ ...pathTransition, duration: 3 }}
            ></motion.path>
            <motion.path
                initial={{
                    d: paths[3].start,
                }}
                animate={{
                    d: paths[3].end,
                }}
                fill="#461e33"
                transition={{ ...pathTransition, duration: 4 }}
            ></motion.path>
            <motion.path
                initial={{
                    d: paths[4].start,
                }}
                animate={{
                    d: paths[4].end,
                }}
                fill="#111111"
                transition={{ ...pathTransition, duration: 5 }}
            ></motion.path>
        </svg>
    );
}
