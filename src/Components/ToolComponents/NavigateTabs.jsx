import { useEffect, useRef, useState } from "react";
import "../ToolComponents/nav.css"


export function NavigateTabs() {
   return (
    <nav className="nav-tabs">
      <button>Product Details</button>
      <button>Reviews</button>
      <button>FAQ</button>
      <button>Analytics</button>
    </nav>
   )
}