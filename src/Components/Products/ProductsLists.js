import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/Reducers/ProductsSlice'

import { AddItems } from "../../Redux/Reducers/CartSlice";



export default function ProductsLists() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const PageLoading = useSelector((state) => state.products.status);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const AddToCart = (item) => {

        // console.log(item)
        // dispatch(AddItems({ ...item, qty: 1 }));
        dispatch(AddItems({ ...item, qty: 1 }));
    }


    //console.log(xx)
    return (
        <>

            <h1>Products</h1>

            {products.length > 0 && (
                // JSX to render when products array has items
                <div>
                    {products.map((product, i) => (
                        <p key={i}>{product.title}</p>
                    ))}
                </div>
            )}

            <p>Old Logic</p>
            <div className="prdouct_list">
                <ul>


                    {(PageLoading == "succeeded") ? products.map((product, index) => {
                        return <li key={index}>
                            <h3>{product.title}</h3>
                            <button onClick={() => AddToCart(product)}>Add to cart</button>
                        </li>
                    }) : <h1>loading...</h1>}
                </ul>


            </div>
        </>
    )
}
