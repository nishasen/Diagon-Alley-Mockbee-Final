import axios from "axios";
import { useState } from "react";

export const AddToWishlist = async(product, wishlistDispatch) => {
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.post("/api/user/wishlist", { product }, config);
        wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: response.data.wishlist })     
    } catch(error) {
        console.log(error)
    }
}