import { useContext, useState } from "react"
import "./ToolReviews.css"
import { reviewsContext } from "../../hooks/Context";

export function ToolsReviews() {
    const [rating,setRating] = useState(1);
    const reviewsData = useContext(reviewsContext);
    const [reviewData,setReviewData] = useState(reviewsData);
    const [newRev,setNewRev] = useState({
        username: "Ayaan Farrukh",
        stars: 0,
        reviews: ""
    });
    return <>
     <section className="product-detail-sec" id="reviews">
            <div className="product-head-div">
                <h1>Brizy AI Reviews</h1>
            </div>
            <div className="user-reviews">
                {reviewData.map((review,i) => {
                   return <div className="user-box">
                    <div className="user-inf-area">
                        <div className="user-name"><p>{review.username}</p></div>
                        <div className="user-stars-area">
                         {[1,2,3,4,5].map((num) => {
                            return <span className="rev-box-stars" style={{color: num <= review.stars ? "blue" : ""}}>★</span>
                         })}
                        {/* <span className="rev-box-stars" style={{color: "blue"}}>★★★★★</span> */}
                         </div>
                     </div>
                    <div className="user-review-area">
                        <p>{review.review}</p>
                    </div>
                    </div>
                })}
            </div>
            <h1 className="leave-rev-head">Leave A Review</h1>
            <main className="product-details-main review-section">
               <div className="review-main-area">
                 <div className="stars-area">
                    <div>
                 <span className="rev-stars" style={{color: "blue"}}>★★★★★</span>
                    </div>  
                    <div>
                    <p>5 points Out Of 5 points</p>
                    </div>
                 </div>
                 <div className="sugg-area">
                    <h2>Would you recommend Brizy AI? Leave a comment</h2>
                 </div>
                 <form onSubmit={(e) => {
                    e.preventDefault();
                    setReviewData((current) => {
                       return [...current,newRev]
                    })
                    console.log("review has been submitted");
                 }}>
                 <div className="user-star-give-area">
                    <div className="star-rating">
                    {[1,2,3,4,5].map((star) => {
                       return <span className="rev-star"
                        key={star}
                        onClick={() => {
                            setRating(star)
                            setNewRev((current) => ({
                                ...current,
                                stars: star
                            }))
                        }}
                        style={{
                          color: star <= rating ? "blue" : "gray",
                          fontSize: "24px",
                          cursor: "pointer",
                        }}
                      >
                        ★
                      </span>
                    })}
                    </div>
                 {/* <span className="rev-stars" style={{color: "blue",cursor: "pointer"}}>★★★★★</span> */}
                 </div>
                 <div className="give-rev-area">
                  <textarea type="text" placeholder="Enter Your Review" onChange={(e) => {
                    setNewRev((current) => ({
                        ...current,
                        review: e.target.value
                    }))
                  }}/>
                  <button type="submit">Post</button>
                 </div>
                 </form>
               </div>
            </main>
        </section>
    </>
}