import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import ClickSpark from "./components/ClickSpark";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="grid-background min-h-screen">
      <ClickSpark
        sparkColor="#feffff"
        sparkSize={20}
        sparkRadius={20}
        sparkCount={8}
        duration={600}
        easing="ease-out"
        extraScale={2}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<OurTeam />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <Footer />
      </ClickSpark>
    </div>
  );
}

export default App;
// import { Route, Routes } from "react-router-dom";
// import { ReactLenis } from "lenis/react";

// import Navbar from "./components/layouts/Navbar";
// import Footer from "./components/layouts/Footer";
// import ClickSpark from "./components/ClickSpark";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Projects from "./pages/Projects";
// import OurTeam from "./pages/OurTeam";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
//       <div className="grid-background min-h-screen">
//         <ClickSpark
//           sparkColor="#feffff"
//           sparkSize={20}
//           sparkRadius={20}
//           sparkCount={8}
//           duration={600}
//           easing="ease-out"
//           extraScale={2}
//         >
//           <Navbar />

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/teams" element={<OurTeam />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>

//           <Footer />
//         </ClickSpark>
//       </div>
//     </ReactLenis>
//   );
// }

// export default App;