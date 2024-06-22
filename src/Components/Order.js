import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../Redux/Reducers/OrdersSlice';
import { json, useNavigate } from 'react-router-dom';
export default function Order() {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const myOrders = useSelector((state) => state.Order.ordersdata)

  useEffect(() => {
    if (userData) {
      dispatch(fetchOrders(userData))
    }
    else {
      navigate("/login")
    }
  }, [])
  return (



    <>

      {
        (myOrders.data) ?
          myOrders.myorders.map((item) => {
            return (
              <>

                {item.OrderItems.map((it, i) => {

                  return (
                    <>
                      <div>
                        <span>{it.title}  </span><br />

                      </div>
                    </>
                  )
                })
                }
                <span><b>Total Price : </b> {item.totalAmount}</span>
                <br />
                <span><b>Order Status : </b> {item.orderStats}</span>
                <hr />
              </>
            )
          })
          : "No Reecord Found!"
      }





      {/* {

        (myOrders.data) ?
          myOrders.myorders.map((item, i) => {
            return (

              item.OrderItems.map((it, i) => {
                return (
                  <>
                    <div>
                      <span>{it.title}  </span><br />

                    </div>

                  </>
                )
              })

            )

          })
          : "Data Not found!"
      } */}




    </>
  )
}
