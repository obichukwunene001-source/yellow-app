import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import OrderConfirmed from "./pages/OrderConfirmed";
import NoPage from "./pages/NoPage";
import BookServices from "./pages/BookServices";
import SeeService from "./pages/SeeService";
import Users from "./components/Users";
import Details from "./components/Details";
import Admin from "./components/Admin";



function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pl-4" >
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Services />}>
            <Route index element={<BookServices />} />
            <Route path="book-service" element={<BookServices />}></Route>
            <Route path="see-service" element={<SeeService />}></Route>
          </Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<Details />}></Route>
            <Route path="admin" element={<Admin />}></Route>
          </Route>
          <Route path="order-confirmed" element={<OrderConfirmed />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </main>
</>
  );
}

export default App;
