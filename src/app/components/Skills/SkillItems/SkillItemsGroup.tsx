import { ReactNode } from "react";

export interface SkillItemsGroupProps {
    text: string;
    children: ReactNode;
}

export default function SkillItemsGroup(props: SkillItemsGroupProps) {
    return (
        <div className={"flex flex-col  gap-1"}>
            <h5 className={"text-neutral-300"}>{props.text}</h5>
            <div className={"flex flex-wrap gap-2"}>{props.children}</div>
        </div>
    );
}
