import { Home } from "../pages/Home";
import { SearchPage } from "../pages/SearchPage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashboard";
import { Feed } from "../pages/Dashboard/DashboardPages/Feed";
import { Applies } from "../pages/Dashboard/DashboardPages/Applies";
import { CreateJobs } from "../pages/Dashboard/DashboardPages/CreateJobs";
import { EditJobs } from "../pages/Dashboard/DashboardPages/EditJobs";
import { Jobs } from "../pages/Dashboard/DashboardPages/Jobs";

import { ProtectedRoute } from "../components/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { UserDataProvider } from "../providers/UserDataContext";
import { HomeProvider } from "../providers/HomeContext";

export function RoutesMain() {
    return(
        <Routes>
            <Route path="*" element={<HomeProvider><Home/></HomeProvider>}/>
            <Route path="/search-jobs" element={<HomeProvider><SearchPage/></HomeProvider>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard" element={<ProtectedRoute/>} >
                <Route element={<UserDataProvider><Dashboard/></UserDataProvider>}>
                    <Route index element={<Feed/>} />
                    <Route path="/dashboard/applies" element={<Applies/>}/>
                    <Route path="/dashboard/create-jobs" element={<CreateJobs/>}/>
                    <Route path="/dashboard/edit-jobs" element={<EditJobs/>}/>
                    <Route path="/dashboard/jobs" element={<Jobs/>}/>
                </Route>
            </Route>
        </Routes>
    )
}