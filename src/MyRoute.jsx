import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DashboardAdmin from './pages/admin/DashboardAdmin';
import ManageUserAdmin from './pages/admin/ManageUserAdmin';
import ReportRepair from './pages/admin/ReportRepair';
import ReportRepairTech from './pages/technical/ReportRepairTech';
import DashboardTech from './pages/technical/DashboardTech';
import EquipmentComponent from './components/EquipmentComponent';
import ConferenceAdmin from './pages/admin/ConferenceAdmin';
import ConferenceRobot from './pages/robot/ConferenceRobot';
import App from './App'
// import FormComponent from "./components/FormComponent"
// import UserConferenceComponent from './components/Robot/UserConferenceComponent';
// import AdminConferenceComponent from './components/Admin/AdminConferenceComponent';
// import LoginComponent from './components/Login/LoginConponent';
// import AdminComponent from './components/Admin/AdminComponent';
// import NavbarComponent from './components/NavbarComponent'
// import TechnicalComponent from './components/Technical/TechnicalComponent';
// import SecurityComponent from './components/Security/SecurityComponent';
// import ManageUserComponent from './components/Admin/ManageUserComponent';
// import EquipmentComponent from './components/Technical/EquipmentComponent';
const MyRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path='/dashboard' exact element={<DashboardAdmin />} />
                <Route path='/manage-user' exact element={<ManageUserAdmin />} />
                <Route path='/report-repair' exact element={<ReportRepair />} />
                <Route path='/report-repair-tech' exact element={<ReportRepairTech />} />
                <Route path='/equipment' exact element={<EquipmentComponent />} />
                <Route path='/con-admin' exact element={<ConferenceAdmin />} />
                <Route path='/con-robot' exact element={<ConferenceRobot />} />
                <Route path='/dashboard-tech' exact element={<DashboardTech />} />
                {/* /Homepage
                <Route path="/" exact element={<App/>} />
                /Login
                <Route path='/login' exact element = {<LoginComponent/>}/>
                /Admin
                <Route path='/adminCon' exact element={<AdminConferenceComponent/>}/>
                <Route path='/userCon' exact element={<AdminConferenceComponent/>}/> */}
                {/* 
                <Route path='/userCon' exact element={<UserConferenceComponent/>}/> */}
                {/* <Route path='/admin' exact element={<AdminComponent/>}/>
                <Route path='/nav' exact element={<NavbarComponent/>}/>
                <Route path='/manageUsers' exact element={<ManageUserComponent/>}/>
                /technical
                <Route path='/technical' exact element={<TechnicalComponent/>}/>
                <Route path='/equipment' exact element={<EquipmentComponent/>}/>
                /security
                <Route path='/security' exact element={<SecurityComponent/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;