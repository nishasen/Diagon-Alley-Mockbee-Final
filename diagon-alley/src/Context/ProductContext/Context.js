import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { Reducer } from './Reducer';
import { GetAllProduct } from '../../APICall';
import { DefaultAddresses } from "../../GeneralFunctions";
import { Compose, 
        setHouse,
        setCategory,
        setPriceSort,
        showNewProduct,
        checkStock,
        checkFastDelivery,
        check4AboveRating,
        setRange,
        setHouseState,
        setCategoryState,
        setSearchProduct } from "./Utils";

const DataContext = createContext({});
const useData = () => useContext(DataContext);
const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [form, setForm] = useState({});
    const { response } = GetAllProduct(); 
    useEffect(() => {
        setData(response.products || [])
    }, [response])
   
    const [state, dispatch] = useReducer(Reducer, {
        house: "",
        category: "",
        sortBy: "",
        addresses: [...DefaultAddresses],
        searchProducts: "",
        newProduct: false,
        onlyInStock: false,
        fastDelivery: false,
        ratingAbove4: false,
        range: 3000,
        houseState: [],
        categoryState: [],
    });
    
    const filteredData = Compose(
        state,
        setHouse,
        setCategory,
        setPriceSort,
        showNewProduct,
        checkStock,
        checkFastDelivery,
        check4AboveRating,
        setRange,
        setHouseState,
        setCategoryState, 
        setSearchProduct
    )(data);
    
    const [showProduct, setShowProduct] = useState({})
    const [houseFilter, setHouseFilter] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState(false);
    return(
        <DataContext.Provider value={{ state, 
                                       Products: filteredData, 
                                        dispatch, 
                                        showProduct, 
                                        setShowProduct,
                                        form, setForm,
                                        houseFilter,
                                        setHouseFilter,
                                        categoryFilter,
                                        setCategoryFilter, 
                                        }}>
            {children}
        </DataContext.Provider>
    );
}
export { useData, DataProvider }