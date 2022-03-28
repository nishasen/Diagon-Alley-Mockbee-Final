import axios from "axios";
import { useEffect, useState } from "react";

export const GetAllProduct = () => {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await axios.get("/api/products");
            setResponse(res.data);    
        } catch(error) {
            setError(error);
        } finally {
            setLoading(false);
        }      
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { response, loading, error }
}