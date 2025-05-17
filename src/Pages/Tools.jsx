import { Header } from "../Components/header";
import { MainArea } from "../Components/ToolComponents/MainArea";
import { MainEntryArea } from "../Components/ToolComponents/MainEntryArea";
import { NavigateTabs } from "../Components/ToolComponents/NavigateTabs";
import "./Tools.css"

export function Tools() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Header />
            <div className="route-path-div">
                <ul>
                    <li>Home  ></li>
                    <li>AI Landing Page Builder  ></li>
                    <li>Ai Tool</li>
                </ul>
            </div>
            <MainEntryArea />
            <MainArea />
        </div>
    )
}