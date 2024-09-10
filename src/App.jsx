import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import AboutMe from "./pages/AboutMe/AboutMe";
import Login from "./pages/login/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/abouteMe" element={<AboutMe />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
