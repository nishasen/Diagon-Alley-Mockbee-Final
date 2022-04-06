import axios from "axios";

export const AddToCart = async(product, cartDispatch) => {
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.post("/api/user/cart", { product }, config);
        cartDispatch({ type: "ADD_TO_CART", payload: response.data.cart });
    } catch(error) {
        console.error(error)
    }
}