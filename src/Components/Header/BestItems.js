import React from 'react'
import { Link } from 'react-router-dom'

export default function BestItems({ NewItems, AddToCart }) {
    return (
        <>

            {(NewItems) && (
                <ul className="dropdown-menu">
                    <li>
                        <div className="header-navigation-content">
                            <div className="row">
                                {NewItems.map((itm, i) => {
                                    return (
                                        <div className="col-md-3 col-sm-4 col-xs-6" key={i}>
                                            <div className="product-item">
                                                <div className="pi-img-wrapper">
                                                    <a href="#"><Link to={`product/${itm.id}`}><img src={itm.thumbnail}
                                                        className="img-responsive" alt="Berry Lace Dress" /></Link></a>
                                                </div>
                                                <h3> <Link to={`product/${itm.id}`}>{itm.title}</Link></h3>
                                                <div className="pi-price">${itm.price}</div>

                                                <a className="btn btn-default add2cart" onClick={() => AddToCart(itm)}>Add to cart</a>
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </li>
                </ul>
            )}

        </>
    )
}
