import { GridArea } from "./GridArea";
import { NavigateTabs } from "./NavigateTabs";
import { Pricing } from "./Pricing";
import { ProductDetails } from "./ProductDetail";
import { ToolsReviews } from "./ToolReviews";

export function MainArea() {
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