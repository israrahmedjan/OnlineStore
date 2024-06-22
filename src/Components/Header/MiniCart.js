import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RemoveItemAC } from '../../Redux/Reducers/CartSlice';
import { Link } from 'react-router-dom';
export default function MiniCart() {

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.Cart)
    const RemoveItemHandler = (item) => {
        dispatch(RemoveItemAC(item));
    }
    return (
        <>
            {/* <pre>

                {JSON.stringify(cart, null, 2)}
            </pre> */}
            <div className="top-cart-block">
                <div className="top-cart-info">
                    <a href="#" className="top-cart-info-count">{(cart.TotalNumItems > 0) ? (cart.TotalNumItems) : 0}</a>
                    <a href="#" className="top-cart-info-value">${(cart.TotalPrice > 0) ? (cart.TotalPrice) : 0}</a>
                </div>
                <i className="fa fa-shopping-cart"></i>


                <div className="top-cart-content-wrapper">
                    <div className="top-cart-content">
                        {(cart.Cartitems.length > 0) ? (
                            <ul className="scroller" style={{ height: '250px' }}>

                                {
                                    cart.Cartitems.map((itm, i) => {
                                        return (
                                            <li>
                                                <a href="shop-item.html"><img src={itm.thumbnail} alt="Rolex classNameic Watch" width="37"
                                                    height="34" /></a>
                                                <span className="cart-content-count">x 1</span>
                                                <strong><a href="shop-item.html">{itm.title}</a></strong>
                                                <em>${itm.price}</em>
                                                <a onClick={() => { RemoveItemHandler(itm) }} className="del-goods">&nbsp;</a>
                                            </li>
                                        )

                                    })
                                }

                                <div className="text-right">
                                    <a className="btn btn-default"><Link to="/cart">View Cart</Link></a>
                                    <a className="btn btn-primary"><Link to="/checkout" style={{ color: 'white' }}>Checkout</Link></a>
                                </div>
                            </ul>

                        )
                            : (
                                <ul className="scroller" style={{ height: '70px' }} >
                                    <li>
                                        <span>Cart is empty!</span>
                                    </li>
                                </ul>
                            )}

                    </div>
                </div>


            </div >
        </>
    )
}
