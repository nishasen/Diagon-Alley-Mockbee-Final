import axios from 'axios';

export const RemoveFromCart = async(productId, cartDispatch) => {
    console.log(productId, localStorage.getItem("userToken"))
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.delete(`/api/user/cart/${productId}`, config);
        cartDispatch({ type: "REMOVE_FROM_CART", payload: response.data.cart })
    } catch(error) {
        console.log(error)
    }
}