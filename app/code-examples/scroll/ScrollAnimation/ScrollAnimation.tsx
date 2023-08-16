import { useRef } from "react";
import { useScroll, useTransform, motion, useMotionTemplate } from "framer-motion";
import ScrollAnimationCover from "@/app/code-examples/scroll/ScrollAnimation/ScrollAnimationCover";

export default function ScrollAnimation() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const progress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
    const overlayOpacity = useTransform(progress, [0, 0.02], [1, 0]);
    const coverOpacity = useTransform(progress, [0, 0.6, 1], [1, 1, 0]);
    const childrenOpacity = useTransform(progress, [0.4, 1], [0, 1]);

    // const zoom = useTransform(progress, [0, 0.4, 1], [1, 5, 25]);
    const zoom = useTransform(progress, [0, 0.4, 1], [1, 5, 25]);

    // use transform instead of framer-motion's 'scale'
    // 'scale' also adds translateZ(0) which results in blurry text in Safari
    const transform = useMotionTemplate`scale(${zoom})`;

    return (
        <div>
            <div
                className="grid grid-cols-1 grid-rows-[100lvh_100lvh] md:grid-rows-[100lvh_300lvh]"
                ref={ref}
            >
                <div className="sticky top-0 col-start-1 row-start-1 bg-lime-300">
                    <video
                        loop={true}
                        muted={true}
                        playsInline={true}
                        autoPlay={true}
                        className="h-full w-full object-cover object-center"
                        poster={"/video-poster.webp"}
                    >
                        <source
                            src={"/videos/dots.webm"}
                            type={"video/webm"}
                        />
                        <source src={"/videos/dots.mp4"} />
                    </video>
                    <div
                        className="absolute left-0 top-0 h-full w-full"
                        style={{ background: "linear-gradient(to top, #000 0%, transparent 10%)" }}
                    ></div>
                </div>

                <motion.div
                    className="sticky top-0 col-start-1 row-start-1 flex flex-col items-center justify-center text-white"
                    style={{ opacity: childrenOpacity }}
                >
                    <div>
                        <h1
                            className={"font-bungee text-6xl text-white md:text-8xl lg:text-9xl"}
                            style={{ textShadow: "#FC0 1px 0 10px" }}
                        >
                            Welcome
                        </h1>
                    </div>
                </motion.div>

                <motion.div
                    className="sticky top-0 col-start-1 row-start-1 bg-white"
                    style={{ opacity: overlayOpacity }}
                ></motion.div>

                <motion.div
                    style={{ opacity: coverOpacity }}
                    className={
                        "sticky top-0 col-start-1 row-start-1 flex w-full items-center justify-center overflow-hidden mix-blend-multiply"
                    }
                >
                    <motion.div
                        className={"h-full w-full"}
                        style={{ transform, transformOrigin: "51%" }}
                    >
                        <ScrollAnimationCover />
                    </motion.div>
                </motion.div>
            </div>
            <div className={"bg-black p-8"}>
                <h1 className={"text-center text-xl text-white"}>Site flow continues here ....</h1>
            </div>
        </div>
    );
}
