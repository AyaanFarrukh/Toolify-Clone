import "./header.css"

export function Header() {
    return <header>
        <nav className="nav">
            <img src="/images/logo.webp"/>
            <ul>
               <li>Products</li>
               <li>Category Ranking</li>
               <li>AI Models</li>
               <li>Social Listening</li>
               <li>Submit & Advertise</li>
               <li>AI SEO Tool</li>
            </ul>
            <button className="dashboard-btn">Dashboard</button>
            <button className="lang-btn">🌐 EN  </button>
        </nav>
    </header>
}