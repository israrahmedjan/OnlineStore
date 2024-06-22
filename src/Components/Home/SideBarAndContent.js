import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsCat } from '../../Redux/Reducers/ProductsSlice';
import CartUtility from '../Utility/CartUtility';
export default function SideBarAndContent({ products, categories, loader }) {

    // const [products1, setproducts] = useState(products)

    const dispatch = useDispatch();
    const { AddToCart } = CartUtility();

    const fetchProductHandler = (cat) => {
        console.log("Cliked", cat);
        dispatch(fetchProductsCat(cat));

    }

    useEffect(() => {

    }, [])
    return (
        <>


            { /* <!-- BEGIN SIDEBAR & CONTENT --> */}


            <div className="row margin-bottom-40" style={{ marginTop: '40px' }}>
                { /* <!-- BEGIN SIDEBAR --> */}
                <div className="sidebar col-md-3 col-sm-4">


                    <ul className="list-group margin-bottom-25 sidebar-menu">

                        {
                            (categories) ? (
                                categories.map((cat, i) => {
                                    return (
                                        <li key={i} className="list-group-item clearfix"><a onClick={() => { fetchProductHandler(cat) }}><i className="fa fa-angle-right"></i>
                                            {cat}</a></li>
                                    )
                                })


                            ) : (
                                <span>No Items Found..</span>
                            )
                        }



                    </ul>
                </div>
                { /* <!-- END SIDEBAR --> */}
                { /* <!-- BEGIN CONTENT --> */}

                {/* <pre>
                    {JSON.stringify(products.category, null, 2)}
                </pre> */}
                {
                    (products) &&
                    (
                        <div className="col-md-9 col-sm-8">
                            <h2>Top items</h2>

                            <div className="col-md-1211 sale-product11">

                                <div className="row">

                                    {
                                        products.map((itm, i) => {
                                            return (
                                                <div className="col-md-3 col-sm-4 col-xs-6 custom-height" key={i}>
                                                    <div className="product-item">
                                                        <div className="pi-img-wrapper">
                                                            <Link to={`product/${itm.id}`}><img src={itm.thumbnail}
                                                                className="img-responsive" alt="Berry Lace Dress" /></Link>
                                                        </div>
                                                        <h3><Link to={`product/${itm.id}`}>{itm.title}</Link></h3>
                                                        <div className="pi-price">{itm.price}</div>

                                                        <a className="btn btn-default add2cart" onClick={() => AddToCart(itm)}>Add to cart</a>



                                                    </div>
                                                </div>

                                            )
                                        })
                                    }


                                </div>

                            </div>

                        </div>
                    )

                }

                { /* <!-- END CONTENT --> */}


            </div >
            { /* <!-- END SIDEBAR & CONTENT --> */}
        </>
    )
}
