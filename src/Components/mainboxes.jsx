import "./main.css"
import { useRef, useState,useEffect } from "react";

export function MainBoxes({title,description}) {
     const ref = useRef(null);
     const [isVisible,setIsVisible] = useState(false);

     useEffect(() => {
          const observer = new IntersectionObserver(
            ([entry]) => {
            setIsVisible(entry.isIntersecting);
            },
            {
              threshold: 0.1,
            }
          );
      
          if (ref.current) {
            observer.observe(ref.current);
          }
      
          return () => {
            if (ref.current) observer.unobserve(ref.current);
          };
        }, []);
       return <div className={`box fade-in ${isVisible ? "visible" : ""}`} ref={ref}>
            <h3 className="tool-title">{title}</h3>
            <p className="tool-description">{description}</p>
       </div>
}