import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BestItems from './BestItems'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProductsNew } from '../../Redux/Reducers/ProductsSlice';
import MiniCart from './MiniCart';
export default function Header({ NewItems, AddToCart }) {


    return (
        <>
            {/* <!-- BEGIN HEADER */}
            <div className="header">
                <div className="container">
                    <Link className="site-logo" to="/"><img src="/assets/corporate/img/logos/logo-shop-red.png"
                        alt="Metronic Shop UI" /></Link>

                    <a href="#" className="mobi-toggler"><i className="fa fa-bars"></i></a>

                    {/* <!-- BEGIN CART */}
                    <MiniCart />
                    {/* <!--END CART */}

                    {/* <!-- BEGIN NAVIGATION */}
                    <div className="header-navigation">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                                    Shop

                                </a>

                                {/* <!-- BEGIN DROPDOWN MENU */}
                                <ul className="dropdown-menu">
                                    <li><a href="#">Hi Tops </a> </li>
                                    <li><a href="#">Running Shoes</a></li>
                                    <li><a href="#">Jackets and Coats</a></li>
                                </ul>
                                {/* <!-- END DROPDOWN MENU */}
                            </li>

                            <li><a href="#">Kids</a></li>
                            <li className="dropdown dropdown100 nav-catalogue">
                                <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                                    New

                                </a>
                                {/* Best Items */}
                                <BestItems NewItems={NewItems} AddToCart={AddToCart} />
                                {/* Best Items End */}
                            </li>
                            {/* <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                                    Pages

                                </a>

                            </li> */}
                            {/* <!-- BEGIN TOP SEARCH */}
                            <li className="menu-search">
                                <span className="sep"></span>
                                <i className="fa fa-search search-btn"></i>
                                <div className="search-box">
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="text" placeholder="Search" className="form-control" />
                                            <span className="input-group-btn">
                                                <button className="btn btn-primary" type="submit">Search</button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            {/* <!-- END TOP SEARCH */}
                        </ul>
                    </div>
                    {/* <!-- END NAVIGATION */}
                </div>
            </div>
            {/* <!-- Header END */}
        </>
    )
}
