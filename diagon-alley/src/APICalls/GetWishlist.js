import axios from "axios";
import { useEffect, useState } from "react";

export const GetWishlist = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [wishlistLoading, setWishlistLoading] = useState(true);

    const fetchData = async () => {
        try {
            const config = {
                headers: {
                    authorization: localStorage.getItem("userToken")
                }
            }
            const res = await axios.get("/api/user/wishlist", config);
            setResponse(res.data);    
        } catch(error) {
            setError(error);
        } finally {
            setWishlistLoading(false);
        }      
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { response, wishlistLoading, error }
}