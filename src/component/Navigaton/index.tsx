/* eslint-disable @typescript-eslint/no-explicit-any */
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
    children: string;
}

const Navigation = (props: Props) => {

    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="w-full">
                <div className="flex flex-col">
                    <Topbar />
                    <div className="p-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation