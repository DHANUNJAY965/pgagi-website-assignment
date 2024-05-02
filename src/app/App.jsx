
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./components/myhero";
import PartnerCompanies from "./components/partner";
import Phases from "./components/Phases";
import Book from "./components/bookcall";
import Whatwe from "./components/Whatwe"
function App() {
  

  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>
          {/* Define each route with a unique path */}
          <Route path="/" element={<Callme />} />
          
          <Route path="/think" element={<Whatwe />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

function Callme() {
  return (
    <>
      <div className="min-h-screen ">
        <HeroSection />
        <PartnerCompanies />
      </div>
      <Phases contentone={"Here’s How We Make Our"} contentwo={"Products Grow"} number={8}/>
      <Phases contentone={"Discover & Feasibility"} contentwo={""} number={1}/>
      <Phases contentone={"Data preparation & research"} contentwo={""} number={2}/>
      <Phases contentone={"Modern development & strategy"} contentwo={""} number={3}/>
      <Phases contentone={"MVP creation"} contentwo={""} number={4}/>
      <Phases contentone={"Quality assurance "} contentwo={""} number={5}/>
      <Phases contentone={"Deployment & Evaluation  "} contentwo={""} number={6}/>
      <Book/> 
    </>
  );
}
