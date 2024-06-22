import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddAddressAC, PlaceOrderSetAC, PlaceOrderAC } from '../Redux/Reducers/OrdersSlice';
import { EmptyCartAC } from '../Redux/Reducers/CartSlice';
import { useNavigate } from 'react-router-dom';


export default function CheckOut() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const AddressesGet = useSelector((state) => state.Order.Addresses)
    const CartItems = useSelector((state) => state.Cart.Cartitems)
    console.log("Items : ", JSON.stringify(CartItems))
    const TotalPrice1 = useSelector((state) => state.Cart.TotalPrice)
    let BlankAddress = {
        username: "",
        email: "",
        phone: ""
    }
    const [Address, SetAddress] = useState({
        username: "",
        email: "",
        phone: ""
    })
    const AddAddress = (address) => {
        console.log(OrderFormValidate(address))
        if (OrderFormValidate(address)) {

            dispatch(AddAddressAC(address));
            SetAddress(BlankAddress);
        }
        else {
            alert("Pleaese Complete the fields !")
        }

    }
    const OrderFormValidate = (address) => {
        if ((address.username == "") || (address.email == "") || (address.phone == "")) {
            return false;
        }
        else {
            return true;
        }
    }
    const PlaceOrder = () => {


        dispatch(PlaceOrderAC(CartItems))
        dispatch(EmptyCartAC())
        Navigate("/order");

    }
    const PlaceOrderSet = (add) => {

        dispatch(PlaceOrderSetAC(add));
    }



    return (
        <>
            <h1>Check out page</h1>
            <div>
                <h3>My Orders {TotalPrice1}</h3>
                <ul className="myorders">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <li>
                            <label>User Name</label>
                            <input type='text' name="username" value={Address.username} onChange={(e) => SetAddress({ ...Address, username: e.target.value })} />
                        </li>
                        <li>
                            <label>Email</label>
                            <input type='text' name="email" value={Address.email} onChange={(e) => SetAddress({ ...Address, email: e.target.value })} />
                        </li>
                        <li>
                            <label>Phone Number</label>
                            <input type='text' name="phone" value={Address.phone} onChange={(e) => SetAddress({ ...Address, phone: e.target.value })} />
                        </li>
                        <button onClick={() => AddAddress(Address)}>Add Address</button>
                    </form>
                </ul>

                <ul className="myorders11">
                    {(AddressesGet.length > 0) ?
                        <li>

                            {AddressesGet.map((add, i) => {
                                return (
                                    <label key={i}>
                                        <input type="radio" name="SetAddress" value={add} onChange={() => PlaceOrderSet(add)} />
                                        <span><strong>Username :  </strong>{add.username}</span>
                                        <span><strong>Email :  </strong>{add.email}</span>
                                        <span><strong>Phone :  </strong>{add.phone}</span>
                                    </label>

                                )
                            }
                            )}
                        </li>
                        : <li>Address not set yet !</li>}
                </ul>
                <ul><li>
                    <button onClick={() => PlaceOrder()}>Place Order</button>
                </li></ul>
            </div>
        </>
    )
}
