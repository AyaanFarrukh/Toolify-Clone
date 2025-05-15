import "./main.css"
import { toolsContext } from "../hooks/Context"
import { useContext } from "react"
import { MainBoxes } from "./mainboxes";
export function MainContent() {
     const toolsContextData = useContext(toolsContext);
    return (<>
                <div className="main-area-box">
                <h1 className="box-title">Tools</h1>
              <div className="tags-area">
                <button className="tag-button">Today</button>
                <button className="tag-button">New</button>
                <button className="tag-button">Most Saved</button>
                <button className="tag-button">Most Used</button>
                <button className="tag-button bro-tag">Browser Extension</button>
                <button className="tag-button">Apps</button>
                <button className="tag-button d-tag">Discord Of AI</button>
                <button className="tag-button tag-end">@toolify</button>
              </div>
              <div className="grid-area-box">
               {toolsContextData.map((tool) => {
                return <MainBoxes  title={tool.name} description={tool.description}/> 
               })}
              </div>
            </div>
       </>

    )
}