import { useState } from "react"
import "./header.css"

export function Header() {
    const [viewSideBar,setViewSideBar] = useState(false);
    return <header>
        <nav className="nav">
            <img src="/images/logo.webp"/>
            <ul className="top-ul">
               <li>Products</li>
               <li>Category Ranking</li>
               <li>AI Models</li>
               <li>Social Listening</li>
               <li>Submit & Advertise</li>
               <li>AI SEO Tool</li>
            </ul>
            <button className="dashboard-btn">Dashboard</button>
            <button className="lang-btn">🌐 EN  </button>
            <div className="sidebtn-div"><button className="sidebar-btn" onClick={() => {
                setViewSideBar(true)
            }}>|||</button>
           {viewSideBar && <div className="sidebar-div">
                <button onClick={() => {
                    setViewSideBar(false);
                }}>x</button>
                <ul className="sidebar-ul">
                <li>Products</li>
                <hr />
               <li>Category Ranking</li>
               <hr />
               <li>AI Models</li>
               <hr />
               <li>Social Listening</li>
               <hr />
               <li>Submit & Advertise</li>
               <hr />
               <li>AI SEO Tool</li>
                </ul>
            </div>} 
            </div>
            
        </nav>
    </header>
}