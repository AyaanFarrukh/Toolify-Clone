import { useEffect, useRef, useState } from "react";
import "../ToolComponents/nav.css"


export function NavigateTabs() {

   return (
    <nav className="nav-tabs">
      <a href="#product-detail" className="nav-link"><button>Product Details</button></a>
      <a href="#reviews" className="nav-link"><button>Reviews</button></a>
      <a href = "#FAQ" className="nav-link"><button>FAQ</button></a>
      <button>Analytics</button>
    </nav>
   )
}