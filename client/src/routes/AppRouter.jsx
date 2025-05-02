import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Services from "../pages/Services";
import Booking from "../pages/Booking";
// import Login from "../admin/Login";
// import Dashboard from "../admin/Dashboard";
// import Appointments from "../admin/Appointments";
// import NotFound from "../pages/NotFound";

export default function AppRouter() {
  console.log("AppRouter");

  return (
    <BrowserRouter>
      <Routes>
        {/* 公共页面 */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />*/}
        <Route path="/" element={<Booking />} />

        {/* 后台管理系统 */}
        {/* <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/appointments" element={<Appointments />} /> */}

        {/* 404 页面 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
