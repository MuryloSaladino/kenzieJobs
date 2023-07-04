import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export function Dashboard() {
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}