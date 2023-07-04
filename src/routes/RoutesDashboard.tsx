import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/DashboardPages/Home";
import { Applies } from "../pages/DashboardPages/Applies";
import { CreateJobs } from "../pages/DashboardPages/CreateJobs";
import { EditJobs } from "../pages/DashboardPages/EditJobs";
import { Jobs } from "../pages/DashboardPages/Jobs";


export function RoutesDashboard() {

    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/applies" element={<Applies/>} />
            <Route path="/create-jobs" element={<CreateJobs/>} />
            <Route path="/edit-jobs" element={<EditJobs/>} />
            <Route path="/jobs" element={<Jobs/>} />
        </Routes>
    )
} 