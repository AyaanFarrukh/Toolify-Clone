import { useEffect, useRef, useState } from "react"

export function FAQ({question,answer}) {
    const [showAns,setShowAns] = useState(false);
    const quesBox = useRef(null);
    const answerRef = useRef(null);

    useEffect(() => {
        const questionBox = quesBox.current;

        showAns ? questionBox.classList.add("showans")
        : questionBox.classList.remove("showans");

    },[showAns])
    
    function HandleOnClick() {
       setShowAns((current) => !current);
    }

   return <div className="faq-ques-box">
    <div className="ques-box"> 
        <h2>{question}</h2>
       <button onClick={() => {
        HandleOnClick();
       }}>+</button>
    </div>
    <div className="answer-faq-box" ref={quesBox}>
    <p className="faq-answer" ref={answerRef}>{answer}</p>
    </div>
    </div>

}