import axios from "axios";
import { useEffect, useState } from "react";

export const GetCart = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [cartLoading, setCartLoading] = useState(true);

    const fetchData = async () => {
        try {
            const config = {
                headers: {
                    authorization: localStorage.getItem("userToken")
                }
            }
            const res = await axios.get("/api/user/cart", config);
            setResponse(res.data);    
        } catch(error) {
            setError(error);
        } finally {
            setCartLoading(false);
        }      
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { response, cartLoading, error }
}