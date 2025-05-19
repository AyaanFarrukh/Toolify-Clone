import { useEffect } from "react";
import { GridArea } from "./GridArea";
import { NavigateTabs } from "./NavigateTabs";
import { Pricing } from "./Pricing";
import { ProductDetails } from "./ProductDetail";
import { ToolsReviews } from "./ToolReviews";

export function MainArea() {
    useEffect(() => {
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link,i) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const tagretSectionId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(tagretSectionId);
                console.log(targetSection, "target sec")
                 targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });
                }
            );
        })
    },[]);
    return (
        <>
        <NavigateTabs />
        <GridArea />
        <div className="all-content-div" style={{display: "flex",
            width: "100%",height: "100%", flexDirection: "column",
            alignItems: "center", justifyContent: "center",padding: "30px"}}>
          <ProductDetails />
          <ToolsReviews />
          <Pricing />
        </div>
        </>
    )
}