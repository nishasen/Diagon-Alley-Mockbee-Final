import axios from 'axios';

export const RemoveFromWishlist = async(productId, wishlistDispatch) => {
    try{ 
        const config = {
            headers: {
                authorization: localStorage.getItem("userToken"),
            }
        };
        const response = await axios.delete(`/api/user/wishlist/${productId}`, config);
        wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: response.data.wishlist })
    } catch(error) {
        setError(error)
    }
}