import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Platforms from "./Pages/Platforms";
import Partners from "./Pages/Partners";
import Impact from "./Pages/Impact";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import News from "./Pages/News";
import OurPhilosophy from "./Pages/OurPhilosophy";
import UbuntuWineAlliance from "./Pages/UbuntuWineAlliance";
import ViaCollective from "./Pages/ViaCollective";
import UbuntuWithoutBorders from "./Pages/UbuntuWithoutBorders";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route 
          path="/" 
          element={
            <div className="h-screen bg-[#0F2747]">
            </div>
          }
        />


        <Route 
          path="/about" 
          element={<About />} 
        />


        <Route 
          path="/our-philosophy" 
          element={<OurPhilosophy />} 
        />

         <Route 
          path="/ubuntu-wine-alliance" 
          element={<UbuntuWineAlliance />} 
        />
        
        <Route 
          path="/ubuntu-without-borders" 
          element={<UbuntuWithoutBorders />} 
        />
         <Route 
          path="/via-collective" 
          element={<ViaCollective />} 
        />
        <Route 
        path="/platforms" 
        element={<Platforms />} 
        />

        <Route 
        path="/partners" 
        element={<Partners />} 
        />

        <Route 
        path="/impact" 
        element={<Impact/>} 
        />

         <Route
          path="/news"
          element={<News />}
        />

        <Route 
        path="/contact" 
        element={<Contact/>} 
        />
     
      </Routes>


      <Footer />

    </BrowserRouter>

  )

}


export default App;