import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from '../Redux/Reducers/UserSlice ';
import { useNavigate } from 'react-router-dom';
export default function Login() {

    // const UserOrderInfo = (state) => state.Order.Addresses;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const UserInfo = useSelector((state) => state.Order.Addresses);
    // const cartData = useSelector((state) => state.Cart);
    const loginData = useSelector((state) => state.user)

    const [login, setlogin] = useState({
        // email: UserInfo.email,
        // password: UserInfo.password
        email: "",
        password: ""
    })
    const handlelogin = (login) => {
        // console.log("Hello login infor!", login)
        dispatch(fetchUser(login));
        // console.log("Login data", JSON.stringify(loginData))



    }

    useEffect(() => {

        if (loginData.status == "succeeded") {
            // console.log("Use effect Called!")
            console.log("Login data", JSON.stringify(loginData.User));
            localStorage.setItem('user', JSON.stringify(loginData.User));
            navigate("/order")
        }
    }, [loginData])
    return (

        <>
            <div>login Page.</div>

            <ul className="myorders">
                <form onSubmit={(e) => e.preventDefault()}>

                    <li>
                        <br />
                        <label>Email</label>
                        <input type='text' name="email" value={login.email} onChange={(e) => setlogin({ ...login, email: e.target.value })} />
                    </li>

                    <li>
                        <br />
                        <label>Password</label>
                        <input type='password' name="passowrd" value={login.password} onChange={(e) => setlogin({ ...login, password: e.target.value })} />
                    </li>


                    <button onClick={() => handlelogin(login)}>Sign In</button>
                </form>
            </ul>


        </>
    )
}
