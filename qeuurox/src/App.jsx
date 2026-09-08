import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layouts/Footer";
import About from "./pages/About";

function App() {
  return (
    <div className="grid-background">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;