import React from 'react'
import { Link, json } from 'react-router-dom'
import CartUtility from '../Utility/CartUtility'

export default function NewArrival({ NewProducts }) {
    const { AddToCart } = CartUtility();

    return (
        <>
            {/* <!-- SALE PRODUCT --> */}


            {(NewProducts) && (
                <div className="col-md-1211 sale-product11">
                    <h2>New Arrivals</h2>

                    <div className="row">
                        {
                            NewProducts.map((itm, i) => {
                                return (

                                    <div className="col-md-3 col-sm-4 col-xs-6" key={i}>
                                        <div className="product-item">
                                            <div className="pi-img-wrapper">
                                                <Link to={`/product/${itm.id}`}><img src={itm.thumbnail}
                                                    className="img-responsive" alt="Berry Lace Dress" /></Link>
                                            </div>
                                            <h3> <Link to={`product/${itm.id}`}>{itm.title}</Link></h3>
                                            <div className="pi-price">${itm.price}</div>
                                            <a className="btn btn-default add2cart" onClick={() => AddToCart(itm)}>Add to cart</a>

                                        </div>
                                    </div>

                                )
                            }

                            )
                        }


                    </div>

                </div >
            )
            }
            {/* <!-- END SALE PRODU
                CT --> */}

        </>
    )
}
