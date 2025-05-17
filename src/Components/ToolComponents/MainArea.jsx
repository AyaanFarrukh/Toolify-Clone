import { GridArea } from "./GridArea";
import { NavigateTabs } from "./NavigateTabs";
import { ProductDetails } from "./ProductDetail";

export function MainArea() {
    return (
        <>
        <NavigateTabs />
        <GridArea />
        <div className="all-content-div" style={{display: "flex",
            width: "100%",height: "100%", flexDirection: "column",
            alignItems: "center", justifyContent: "center",padding: "30px"}}>
          <ProductDetails />
        </div>
        </>
    )
}