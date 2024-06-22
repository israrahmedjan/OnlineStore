import React from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import { AddItems } from '../../Redux/Reducers/CartSlice';

export default function CartUtility() {
    const dispatch = useDispatch();
    const AddToCart = (item) => {
        dispatch(AddItems({ ...item, qty: 1 }));
        toast.success(`${item.title} has been added to your cart!`);
    }


    return { AddToCart }
}
