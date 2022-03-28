import axios from 'axios';
import { useState } from 'react';

export const IncrDecrQuantity = async(productId, cartDispatch, incrDecrQty) => {
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const incrOrDecr = {
            action: {
                type: incrDecrQty,
            }
        };
        const response = await axios.post(`/api/user/cart/${productId}`, incrOrDecr, config);
        cartDispatch({ type: "INCR_DECR_QTY", payload: response.data.cart })
    } catch(error) {
        console.log(error)
    } 
}