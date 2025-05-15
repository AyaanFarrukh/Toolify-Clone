import { EntryBox } from "./Components/EntryBox";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/header";
import { MainContent } from "./Components/main";
import { MainArea } from "./Components/MainArea";

export function App() {
   return (
   <div style={{display: "flex", flexDirection: "column"
   }}>
   <Header/>
   <EntryBox />
   <MainArea/>
   <Footer/>
   </div>
   )
}