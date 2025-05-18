import "./Pricing.css"

export function Pricing() {
    return <section className="product-detail-sec price-sec">
            <div className="product-head-div">
                <h1>Brizy AI Pricing</h1>
            </div>
            <main className="price-grid-area">
                <div className="price-box">
                    <div className="price-head">
                        <h1>Personal Cloud</h1>
                        <p>$19/month</p>
                    </div>
                    <div className="price-info">
                        <p>1 custom-domain website with AI</p>
                    </div>
                </div>
                <div className="price-box">
                  <div className="price-head">
                        <h1>Agency Cloud</h1>
                        <p>$69/month</p>
                    </div>
                    <div className="price-info">
                        <p>10 custom-domain website with AI</p>
                    </div>
                </div>
                <div className="price-box">
                  <div className="price-head">
                        <h1>White Label Cloud</h1>
                        <p>$159/month</p>
                    </div>
                    <div className="price-info">
                        <p>white label AI website builder + 10 custom-domain websites with AI</p>
                    </div>
                </div>
            </main>
        </section>
}