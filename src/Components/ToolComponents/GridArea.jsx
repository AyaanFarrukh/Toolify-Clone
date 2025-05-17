import "./GridArea.css"
import {MainBoxes} from "../mainboxes"
import { useContext } from "react"
import { toolsUnderNav } from "../../hooks/Context";

export function GridArea() {
    const toolUnderNavData = useContext(toolsUnderNav);
    return <div className="grid-under-nav-area">
      {toolUnderNavData.map((tool,i) => {
        return <MainBoxes title={tool.name} description={tool.description}/>
      })}
    </div>
}