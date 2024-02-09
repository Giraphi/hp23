export interface GlitchLinkProps {
    text: string;
}

export default function GlitchLink(props: GlitchLinkProps) {
    return <p data-text={props.text}>{props.text}</p>;
}
