import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import Product from "./pages/product";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import MobileToolbar from "./components/MobileToolbar";


import "./assets/css/bootstrap.min.css";
import "./assets/css/animate.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/fonts/fonts.css";
import "./assets/icon/icomoon/style.css";
import "./assets/css/styles.css";

function MainLayout() {
  return (
    <main id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <ShoppingCart />
      <MobileToolbar />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
