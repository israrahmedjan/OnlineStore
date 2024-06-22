import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../Redux/Reducers/UserSlice ';
import Slider from './Slider';
import Top from './Top';
import Header from './Header';
import { fetchProductsNew } from '../../Redux/Reducers/ProductsSlice';
import { AddItems } from '../../Redux/Reducers/CartSlice';
import { toast } from 'react-toastify';
export default function Navbar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.Cart.Cartitems);
  const NewItems = useSelector((state) => state.products.newItems);
  // const NewProducts = useSelector((state) => state.products.newItems);
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem('user'));
  const handellogout = () => {
    console.log("Logout Process");
    localStorage.removeItem('user');
    dispatch(logout());

    navigate("/");
  }
  const AddToCart = (item) => {
    //dispatch(AddItems({ ...item, qty: 1 }));
    dispatch(AddItems({ ...item, qty: 1 }));
    toast.success(`${item.title} has been added to your cart!`);
  }



  useEffect(() => {
    dispatch(fetchProductsNew());
  }, [])

  return (
    <>


      {/* <!-- END BEGIN STYLE CUSTOMIZER --> */}


      <Top />
      <Header NewItems={NewItems} AddToCart={AddToCart} />
      {/* <Slider /> */}
      {/* <ul className="navbar_cl">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="/products">Products</Link></li>
        <li> <Link to="/cart">Cart({cart.length})</Link></li>

        {(userData) ?
          <>
            <li> <Link>Welcomme to {userData.email} </Link></li>
            <li> <Link to="/order">My Orders </Link></li>
            <li><a onClick={(e) => handellogout()}>Logout</a></li>
          </>
          : <li> <Link to="/login">Login</Link></li>
        }

      </ul > */}
    </>
  )
}
