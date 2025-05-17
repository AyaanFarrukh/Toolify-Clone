import { Header } from "../Components/header";
import { EntryBox } from "../Components/EntryBox";
import { MainArea } from "../Components/MainArea";
import { Footer } from "../Components/Footer";

export function HomePage() {
    return <>
    <Header /> 
    <EntryBox />
    <MainArea/>
    <Footer/>
    </>
}