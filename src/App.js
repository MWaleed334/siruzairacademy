import React from "react"
import Header from "./Component/Main/Header/header";
import Footer from './Component/Main/Footer/footer';
import AboutMain from "./Component/Main/AboutMain/aboutMain";
import OurManageMain from "./Component/Main/OurManageMain/ourManageMain";
import ContactUs from "./Component/Main/ContactUs/contactUs"
import TopAchievers from "./Component/Main/TopAchievers/topAchievers"
import Home from './Component/Screens/Home/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
     
      <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/home" element={<Home/>} />
                        <Route path ="/aboutMain" element={<AboutMain/>} />
                        <Route path="/ourManagement" element={<OurManageMain/>} />
                        <Route path="/topAchievers" element={<TopAchievers/>} />
                        <Route path="/contactUs" element={<ContactUs/>} />
                    </Routes>
                    <Footer />
                 </Router> 
                 {/* <OurManageMain/> */}
    </div>
  );
}

export default App;
