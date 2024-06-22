import React from 'react'
import CartUtility from '../Utility/CartUtility'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function RelatedProducts({ SimilerProducts }) {
    const { AddToCart } = CartUtility();

    return (
        <>
            {/* {JSON.stringify(SimilerProducts, null, 2)} */}
            <div className="row margin-bottom-40">
                <div className="col-md-12 col-sm-12">
                    <h2>Related Products </h2>
                    {
                        (SimilerProducts) ?
                            SimilerProducts.map((itm, i) => {
                                return (
                                    <div className="col-md-3 col-sm-3" key={i}>
                                        <div className="product-item">
                                            <div className="pi-img-wrapper">
                                                <img src={`${itm.thumbnail}`} className="img-responsive" alt="Berry Lace Dress" />
                                                {/* <div>
                                                    <a href="assets/pages/img/products/k1.jpg" className="btn btn-default fancybox-button">Zoom</a>
                                                    <a href="#product-pop-up" className="btn btn-default fancybox-fast-view">View</a>
                                                </div> */}
                                            </div>
                                            <h3><Link to={`/${itm.id}`}>Berry Lace Dress</Link></h3>
                                            <div className="pi-price">${itm.price}</div>
                                            <a className="btn btn-default add2cart" onClick={() => AddToCart(itm)}>Add to cart</a>


                                            <div className="sticker sticker-new"></div>
                                        </div>
                                    </div>
                                )
                            })


                            : (
                                <p>Products not found...</p>
                            )}

                </div>
            </div >

        </>
    )
}
