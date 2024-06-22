import React, { useEffect } from 'react'
import Content from './Content'
import RelatedProducts from './RelatedProducts'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail, fetchProductsNew } from '../../Redux/Reducers/ProductsSlice';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


export default function ProductDetail() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const prodDetData = useSelector((state) => state.products.ProductDetail);
    const SimilerProducts = useSelector((state) => state.products.newItems);

    useEffect(() => {
        dispatch(fetchProductDetail(id));
        dispatch(fetchProductsNew(8));
    }, [dispatch])

    return (
        <>
            <div className="main">
                <div className="container">
                    <ul className="breadcrumb">

                        <li><a href="index.html">Home</a></li>
                        <li><a href="">Store</a></li>
                        <li className="active">{prodDetData && prodDetData.title} </li>
                    </ul>
                    { /* <!-- Single Product content --> */}
                    <ToastContainer />
                    <Content prodDetData={prodDetData} />
                    { /* <!-- Siggle Product Content End --> */}
                    {/* Related Products */}
                    <RelatedProducts SimilerProducts={SimilerProducts} />
                    {/* Realated Products End */}

                </div>
            </div >

        </>
    )
}
