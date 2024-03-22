/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
    children: string;
}

const Navigation = (props: Props) => {
    const [openSide, setOpenSide] = useState(false)
    
    return (
        <div className="flex flex-row">
            <Sidebar openSide={openSide} setOpenSide={setOpenSide} />
            <div className="w-full">
                <div className="flex flex-col">
                    <Topbar openSide={openSide} setOpenSide={setOpenSide} />
                    <div className="p-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation