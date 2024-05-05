import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/mens" element={<Category/>}></Route>
          <Route path="/womens" element={<Category/>}></Route>
          <Route path="/kids" element={<Category/>}></Route>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}></Route>
          </Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </main>
  );
}
