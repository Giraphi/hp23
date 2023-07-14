import React from "react";

export interface PageProps {}

export default function Page(props: PageProps) {
    return (
        <div className={"h-[300vh] bg-lime"}>
            <div className={"h-[200vh] "}>content</div> <div className={"h-100px sticky bottom-0 bg-pink"}>sticky</div>{" "}
        </div>
    );
}
