import { cn } from "@/util/functions";

export interface VideoPlayerProps {
    mp4: string;
    webm: string;
    poster: string;
    className?: string;
}

export default function VideoPlayer(props: VideoPlayerProps) {
    return (
        <div className={cn("aspect-video w-full", props.className)}>
            <video
                controls={true}
                className="h-full w-full rounded-xl object-cover  object-center"
                poster={props.poster}
            >
                <source
                    src={props.webm}
                    type={"video/webm"}
                />
                <source
                    src={props.mp4}
                    type={"video/mp4"}
                />
            </video>
        </div>
    );
}
