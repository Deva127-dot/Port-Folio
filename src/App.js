import MainNavbar from "./components/NavbarPage/MainNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./components/Work/Work";
import Skills from "./components/Tools & Skills/ToolsLibraries";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainNavbar />} />
        <Route path="/work" element={<Work />} />
        <Route path="/tools" element={<Skills/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;