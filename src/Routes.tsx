import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Campaigns } from "./pages/Campaigns";
import { Users } from "./pages/Users";
import { Banks } from "./pages/Banks";
import { Login } from "./pages/Login";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/campaigns" element={<Campaigns/>} />
                <Route path="/users" element={<Users/>} />
                <Route path="/banks" element={<Banks/>} />
            </Routes>
        </Router>
    )
}