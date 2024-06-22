import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { orderSet, saveOrder } from '../Redux/Reducers/OrdersSlice';
import MyOrConfModal from './MyOrConfModal';
import { Button } from 'react-bootstrap';
import { EmptyCartAC } from '../Redux/Reducers/CartSlice';


//import MyModal from './MyModal';



export default function CheckOut() {


    // Order Confirmation Dialoge Script
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleConfirm = () => {
        console.log('Confirmed!');
        dispatch(saveOrder(orderItems));
        dispatch(EmptyCartAC());
        // alert("Hello");
        handleClose();
        navigate('/thankyou');
    };
    // Order Confirmation Dialoge Script
    //useSelector((state) => state.Cart.TotalNumItems)

    const navigate = useNavigate();
    const cartData = useSelector((state) => state.Cart);
    //console.log("Total price :", cartData.TotalPrice);
    const [formError, setFormError] = useState([]);
    const orderItems = useSelector((state) => state.Order)
    const dispatch = useDispatch();
    const [Address, SetAddress] = useState({
        username: "israr",
        email: "israr@gmail.com",
        password: "israr123",
        phone: "03325465125",
        address: "Islamabad F11 Markaz!",
        paymentMethod: "Credit Card"
    })
    const AddAddress = (addressObj) => {
        // console.log(addressObj);
        if (OrderFormValidate(addressObj)) {
            dispatch(orderSet({ items: cartData.Cartitems, addresses: addressObj, totalAmount: cartData.TotalPrice }))
            setShowModal(true);




        }
        else {
            //  console.log("Please fill out the fields : ", JSON.stringify(formError));
        }
    }


    const OrderFormValidate = (address) => {
        let errors = [];
        if ((address.username == "") ||
            (address.email == "") ||
            (address.phone == "") ||
            (address.address == "") ||
            (address.paymentMethod == "")) {
            if (!address.username) {
                errors = [...errors, "Username is Required"];
            }


            if (!address.eamil) {

                errors = [...errors, "Email is Required"];
            }
            if (!address.passowrd) {

                errors = [...errors, "Password is Required"];
            }
            if (!address.email) {

                errors = [...errors, "Address is Required"];
            }
            if (!address.phone) {

                errors = [...errors, "Phone is Required"];
            }
            if (!address.address) {

                errors = [...errors, "Address is Required"];
            }
            if (!address.paymentMethod) {

                errors = [...errors, "Payment Method is Required"];
            }
            setFormError(errors);
            return false;
        }
        else {
            return true;
        }
    }


    return (
        <>


            <Button variant="primary" onClick={handleShow}>
                Open Modal
            </Button>
            <MyOrConfModal show={showModal} handleClose={handleClose} handleConfirm={handleConfirm} items={orderItems} />
            <div>
                {/* <pre>
                    Check out page Start ! {JSON.stringify(orderItems, null, 2)}
                </pre> */}
            </div>

            {/* <div>
                <pre>
                    Check out page Start ! {JSON.stringify(cartData.Cartitems, null, 2)}
                </pre>
            </div> */}

            {
                (cartData.Cartitems.length > 0) && (
                    <>
                        <table width="100%" border="1">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartData.Cartitems.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i++}</td>
                                                <td>{item.title}</td>
                                                <td>{item.price}</td>
                                                <td>{item.price}</td>
                                            </tr>

                                        )
                                    })
                                }
                                <tr>
                                    <td colSpan={4}>
                                        <b>Total Number Of Items </b> : {cartData.TotalNumItems} <br />
                                        <b>Discount</b> : {cartData.Discount} <br />
                                        <b>Shipping Charges</b> : {cartData.ShippingCharges} <br />
                                        <b>Total Price </b> : {cartData.TotalPrice + cartData.ShippingCharges} <br />


                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <h3>My Orders </h3>
                            {
                                (formError.length > 0) && (
                                    <>
                                        <h2>Pleae fillout the form!</h2>
                                        {
                                            formError.map((er, i) => {
                                                return (
                                                    <div key={i}>
                                                        <span>{er}</span><br />
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                                )
                            }
                            <ul className="myorders">
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <li>
                                        <br />
                                        <label>User Name</label>
                                        <input type='text' name="username" value={Address.username} onChange={(e) => SetAddress({ ...Address, username: e.target.value })} />
                                    </li>
                                    <li>
                                        <br />
                                        <label>Email</label>
                                        <input type='text' name="email" value={Address.email} onChange={(e) => SetAddress({ ...Address, email: e.target.value })} />
                                    </li>

                                    <li>
                                        <br />
                                        <label>Password</label>
                                        <input type='password' name="passowrd" value={Address.password} onChange={(e) => SetAddress({ ...Address, passowrd: e.target.value })} />
                                    </li>

                                    <li>
                                        <br />
                                        <label>Phone Number</label>
                                        <input type='text' name="phone" value={Address.phone} onChange={(e) => SetAddress({ ...Address, phone: e.target.value })} />
                                    </li>
                                    <li>
                                        <br />
                                        <label>Adddress</label>
                                        <textarea name="phone" value={Address.address} onChange={(e) => SetAddress({ ...Address, address: e.target.value })}>

                                        </textarea>

                                    </li>
                                    <li>
                                        <label>Payment Method:</label>
                                        <select name='paymentMethod' onChange={(e) => SetAddress({ ...Address, paymentMethod: e.target.value })}>
                                            <option value="Credit Card">Credit Card</option>
                                            <option value="PayPal">PayPal</option>
                                        </select>

                                    </li>
                                    <button onClick={() => AddAddress(Address)}>Place Order</button>
                                </form>
                            </ul>


                        </div>

                    </>
                )
            }
        </>
    )

}
