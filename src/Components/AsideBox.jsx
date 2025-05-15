import "./main.css"

export function AsideBox({title,description}) {
   return <div className="aside-box">
        <h3 className="tool-title-aside">{title}</h3>
        <p className="tool-description-aside">{description}</p>
   </div>   
}