import "./main.css"

export function MainBoxes({title,description}) {
       return <div className="box">
            <h3 className="tool-title">{title}</h3>
            <p className="tool-description">{description}</p>
       </div>
}