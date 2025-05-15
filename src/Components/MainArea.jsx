import { MainContent } from "./main"
import "./main.css"
import { AsideBox } from "./AsideBox"
import { useContext } from "react"
import { toolsContext } from "../hooks/Context";

export function MainArea() {
    const toolContextData = useContext(toolsContext);
    return <div className="all-div">
   <section className="main-section">
    <MainContent />
    <MainContent />
    <MainContent />
    <MainContent />
    <MainContent />
   </section>
   <div className="aside-area">
    <div className="feature-head">
    <h1>featured</h1>
    </div>
     <aside>
        {toolContextData.map((tool) => {
            return <AsideBox title={tool.name} description={tool.description}/> 
        })}
        
     </aside>
    </div> 
      </div>
}