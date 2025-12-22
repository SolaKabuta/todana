import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
// import './App.css'
import Home from "./pages/Home";
// import { TransitionProvider } from "./components/layout/TransitionProvider";
import Collection from "./pages/Collection";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import ProductPage from "./pages/ProductPage";
// import 404 from "./pages/404";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        {/*<Route path="/produit/:id" element={<ProductPage />} />*/}
        {/*<Route path="/about" element={<About />} />*/}
        {/*<Route path="/contact" element={<Contact />} />*/}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
