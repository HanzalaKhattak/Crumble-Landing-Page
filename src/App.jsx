import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import Menu from "./Pages/Menu"
import Careers   from "./Pages/Careers"
import Terms from "./Pages/Terms"
import Privacy from "./Pages/Privacy"
import Conditions from "./Pages/Conditions"
import OrderNow from "./Pages/OrderNow"
import Footer from "./Components/Footer"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/careers" element={<Careers/>} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/conditions" element={<Conditions/>} />
          <Route path="/orders" element={<OrderNow/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
