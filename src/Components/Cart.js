import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateItems, RemoveItemAC } from '../Redux/Reducers/CartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const cart = useSelector((state) => state.Cart.Cartitems)
  const Discount = useSelector((state) => state.Cart.Discount)
  const ShippingCharges = useSelector((state) => state.Cart.ShippingCharges)
  const TotalNumItems = useSelector((state) => state.Cart.TotalNumItems)
  const status = useSelector((state) => state.Cart.cartstatus)

  const TotalPrice = useSelector((state) => state.Cart.TotalPrice)
  //

  const dispatch = useDispatch();
  const UpdateItemsQty = (e, item) => {
    let qty = e.target.value * 1;
    dispatch(UpdateItems({ ...item, qty: qty }))
    //SetTotalPrice(TotalPrice)
  }
  const RemoveItem = (item) => {
    dispatch(RemoveItemAC(item))
  }

  //console.log(status);

  return (
    <>
      <div>
        <ul className="cartul">
          {(cart.length > 0) ? cart.map((item, i) => {
            return (
              <div key={i}>
                <li><h1>{item.title}</h1></li>
                <li>Qty : <span>{item.qty}</span></li>
                <li>Price x Qty  ( {item.price}*{item.qty})  = <span>{item.price * item.qty}</span></li>


                <li>
                  <select name="qty" onChange={(e) => UpdateItemsQty(e, item)} value={item.qty}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </li><li><span onClick={() => RemoveItem(item)}>X</span></li>
              </div>
            )


          }) : <p>Cart Items is empty</p>}
        </ul>
        <hr />
        <h4>Total Items : {TotalNumItems}</h4>
        <h4>Total Price + Shipping Charges : {TotalPrice} + {ShippingCharges} = {TotalPrice + ShippingCharges}</h4>


        <Link to="/checkout"><h4>Check Out</h4></Link>
      </div>
    </>
  )
}
