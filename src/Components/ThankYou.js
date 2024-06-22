import React from 'react'
import { Link } from 'react-router-dom'

export default function ThankYou() {
    return (
        <div>ThankYou, Your order hass been placed. To view your order status please login.


            <p><Link to="/login">login</Link></p>
        </div>
    )
}
