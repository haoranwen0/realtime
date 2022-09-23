import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Upload from "./pages/Upload";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div id="app-wrapper">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
