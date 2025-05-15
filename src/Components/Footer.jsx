import "./Footer.css"

export function Footer() {
    return <footer>
       <div className="first-area">
        <img src="/images/logo.webp" className="footer-logo"/>
       </div>
       <div className="second-area">
        <p>Toolify, The Best AI Websites & AI Tools Directory</p>
        <nav className="footer-nav">
            <ul>
                <li>Products</li>
                <li>Category Ranking</li>
                <li>AI Models</li>
                <li>Social Listening</li>
                <li>Submit & Advertise</li>
            </ul>
        </nav>
        <p className="copyright-p">Copyright ©2025 Toolify. All Rights Reserved.</p>
       </div>
    </footer>
}