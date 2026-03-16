import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import CodeOfPractice from "./pages/CodeOfPractice";
import Contact from "./pages/Contact";
import StartFundraiser from "./pages/StartFundraiser";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/code-of-practice" element={<CodeOfPractice />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/start-fundraiser" element={<StartFundraiser />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;