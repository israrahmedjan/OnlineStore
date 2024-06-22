import React from 'react'
import { Link } from 'react-router-dom'
export default function Top() {
    return (
        <>
            {/* <!-- BEGIN TOP BAR --> */}
            <div className="pre-header">
                <div className="container">
                    <div className="row">
                        {/* <!-- BEGIN TOP BAR LEFT PART --> */}
                        <div className="col-md-6 col-sm-6 additional-shop-info">
                            <ul className="list-unstyled list-inline">
                                <li><i className="fa fa-phone"></i><span>+1 456 6717</span></li>
                                {/* <!-- BEGIN CURRENCIES --> */}
                                <li className="shop-currencies">
                                    <a href="#">€</a>
                                    <a href="#">£</a>
                                    <a href="#" className="current">$</a>
                                </li>
                                {/* <!-- END CURRENCIES -->
            <!-- BEGIN LANGS --> */}
                                <li className="langs-block">
                                    <a href="#" className="current">English </a>
                                    <div className="langs-block-others-wrapper">
                                        <div className="langs-block-others">
                                            <a href="#">French</a>
                                            <a href="#">Germany</a>
                                            <a href="#">Turkish</a>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- END LANGS --> */}
                            </ul>
                        </div>
                        {/* <!-- END TOP BAR LEFT PART -->
        <!-- BEGIN TOP BAR MENU --> */}
                        <div className="col-md-6 col-sm-6 additional-nav">
                            <ul className="list-unstyled list-inline pull-right">
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Wishlist</a></li>
                                <li><a href="shop-checkout.html"><Link to="/checkout">checkout</Link></a></li>
                                <li><a href="#"><Link to="/login">Log In</Link></a></li>
                            </ul>
                        </div>
                        {/* <!-- END TOP BAR MENU --> */}
                    </div>
                </div>
            </div>
            {/* <!-- END TOP BAR --> */}
        </>
    )
}
