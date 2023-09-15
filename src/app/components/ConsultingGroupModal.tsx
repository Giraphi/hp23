import Link from "next/link";

export interface ConsultingGroupModalProps {}

export default function ConsultingGroupModal(props: ConsultingGroupModalProps) {
    return (
        <div className={"bg-red-900"}>
            <h1>hello</h1>
            <Link href={"/"}>Close</Link>
        </div>
    );
}
