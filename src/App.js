import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import PaymentGateway from './components/Payment/PaymentGateway';
import { AuthProvider } from './components/context/AuthProvider';
import RequireAuth from './components/context/RequireAuth';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route element={<RequireAuth/>}>
        <Route path='/payment-gateway' element={<PaymentGateway/>} />
        <Route path='/profile' element={<Profile/>} />
        </Route>
      </Routes>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
