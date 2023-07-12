import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainWork from "./components/Work/MainWork";
import MainTools from "./components/Tools & Skills/MainTools";
import MainContact from "./components/Contact/MainContact";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<MainWork />} />
        <Route path="/tools" element={<MainTools/>} />
        <Route path="/contact" element={<MainContact/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;