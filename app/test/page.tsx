import React from "react";

export interface PageProps {}

export default function Page(props: PageProps) {
    return (
        <>
            {/*<div className={"h-[100vh]"}></div>*/}
            <div className={"bg-black"}>
                <div className={"sticky top-[-100vh] h-[200vh] border border-4 border-red-950 bg-gradient-to-b from-pink to-lime "}>
                    sticky
                </div>
                <div className={"relative h-[50vh] bg-amber-400"}>content</div>
            </div>
        </>
    );
}
