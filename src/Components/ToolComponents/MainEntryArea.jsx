import "./MainEntry.css"

export function MainEntryArea() {
  return (
    <section className="main-entry-area">
      <div className="head-box">
        <div className="btn-head-area">
        <h1>Brizy AI</h1>
        <button>Open Site</button>
        </div>
        <div className="media-area">
            <button>Stars</button>
            <button>T</button>
            <button>F</button>
        </div>
      </div>
      <div className="main-info-area">
        <div className="info-sec-area">
          <div className="review-bar">
            <div className="stars">5 Stars</div>
            <div className="reviews">0 Reveiws</div>
            <div className="saved">0 Saved</div>
          </div>
          <div className="cell">
            <div className="head-info">Introduction:</div>
            <div className="tool-info-div">Best AI-website builder with Google Business Profile integration</div>
          </div>
          <div className="cell">
            <div className="head-info">Added on:</div>
            <div className="tool-info-div">May 17 2025</div>
          </div>
          <div className="cell">
            <div className="head-info">Monthly Visitors:</div>
            <div className="tool-info-div">122.1K</div>
          </div>
          <div className="cell">
            <div className="head-info">Social & Email:</div>
            <div className="tool-info-div">abxxyz@gmail.com</div>
          </div>
          <div className="tag-area">
            <button className="first-button">Website</button>
            <button>AI Landing Page Builder</button>
            <button>AI Website Builder</button>
            <button>No Code & Low-Code</button>
        </div>
        </div>
        <div className="image-sec-area">
          <div className="image-area">
            <img src="/images/tool-image-brizy.jpg" className="tool-img" />
          </div>
          <div className="control-btns-area">
            <button>Advertise This Tool</button>
            <button>Update This Tool</button>
          </div>
        </div>
      </div>
    </section>
  )
}