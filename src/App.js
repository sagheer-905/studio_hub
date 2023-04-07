// import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Forget from './Componnet/Account/Forget';
import Login from './Componnet/Account/Login';
import Signup from './Componnet/Account/Signup';
import Footer from './Componnet/HomePage/Footer';
import About from './Pages/About';
import Conatct from './Pages/Conatct';
import Homa from './Pages/Homa';
import OurService from './Pages/OurService';
import Portfolio from './Pages/Portfolio';
import Pricing from './Pages/Pricing';
import ServiceDetail from './Pages/ServiceDetail';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homa/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<OurService/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/contact' element={<Conatct/>}/>
      <Route path='/service-details/:id' element={<ServiceDetail/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forget' element={<Forget/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}
export default App;
