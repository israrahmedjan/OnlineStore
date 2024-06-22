import React, { useState } from 'react'
import ProductListPage from './ProductListPage'
import NavebarPage from './NavebarPage'
import Aboutus from './Aboutus';
import CartPage from './CartPage';
import CheckOutPage from './CheckOutPage';
import OrderPage from './OrderPage';
import HomePage from './HomePage';
import ThankYou from '../Components/ThankYou';
import Login from '../Components/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import '../App.css'
import ProductDetailPage from './ProductDetailPage';

export default function Home() {


  return (

    <Router>
      <NavebarPage />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </Router>



  )
}
