import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, fetchProductsCat, fetchProductsNew } from '../../Redux/Reducers/ProductsSlice';
import Slider from '../Header/Slider';
import NewArrival from './NewArrival';
import SideBarAndContent from './SideBarAndContent';
import { AddItems } from '../../Redux/Reducers/CartSlice';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { json } from 'react-router-dom';



export default function HomeComponent() {


  const dispatch = useDispatch();

  const NewProducts = useSelector((state) => state.products.newItems);
  const [products, setProducts] = useState(null);
  const catProducts = useSelector((state) => state.products.catItems)

  const productsItems = useSelector((state) => state.products.items)
  const loader = useSelector((state) => state.products.status);

  const categories = ["beauty", "fragrances", "furniture", "groceries", "home-decoration", "kitchen-accessories",
    "laptops", "mens-shirts", "mens-shoes", "mens-watches", "mobile-accessories", "motorcycle", "skin-care",
    "smartphones", "sports-accessories", "sunglasses", "tablets", "tops", "vehicle", "womens-bags",
    "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"]


  // const AddToCart = (item) => {
  //   dispatch(AddItems({ ...item, qty: 1 }));
  //   toast.success(`${item.title} has been added to your cart!`);
  // }

  const fetchProductHandler = (cat) => {
    //console.log("Cliked", cat);
    dispatch(fetchProductsCat(cat));
    setProducts(catProducts)

  }


  // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductsNew(14));
    console.log("Dispatch use effect hooks!");
    return () => {
      console.log("Clenan up function login in dispatch function!");
    }
  }, [dispatch]);

  // Set products when productsItems changes
  useEffect(() => {
    setProducts(productsItems);
    console.log("Items use effect!");

  }, [productsItems]);
  useEffect(() => {
    setProducts(catProducts);
    console.log("cat use effect!");

    return () => {
      console.log("Cleanup function log in catProducts effect!");
      setProducts(null)
    };
  }, [catProducts]);


  return (

    <>
      {/* <Slider /> */}


      <div className="main">
        <div className="container">

          {(loader == "succeeded") ?
            (
              <>
                <ToastContainer />
                {/* <!-- BEGIN SALE PRODUCT & NEW ARRIVALS --> */}
                <NewArrival
                  NewProducts={NewProducts} />

                <SideBarAndContent
                  products={products}
                  fetchProductHandler={fetchProductHandler}
                  categories={categories}
                  loader={loader} />
              </>
            ) :
            (<div>loading...</div>)

          }

        </div>
      </div>

      {/* <h1>Hello ecommerce Sites  </h1>
      <pre>
        <p>
          {JSON.stringify(products, null, 2)}
        </p>
      </pre> */}
    </>
  )
}

