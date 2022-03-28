import { createContext, useContext, useReducer } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { GetWishlist } from '../../APICall';
import { Reducer } from './Reducer';

const WishlistContext = createContext();
const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({children}) => {
    const [wishlistState, wishlistDispatch] = useReducer(Reducer, {wishlistItems: []})
    
    const { response, wishlistLoading, error } = GetWishlist();
    
    useEffect(()=>{
        wishlistDispatch({type: "SET_WISHLIST", payload: response.wishlist || []})   
    }, [response])

    return (
        <WishlistContext.Provider value={{ wishlistState, wishlistDispatch, wishlistLoading, error }}>
            {children}
        </WishlistContext.Provider>
    );
}

export { useWishlist, WishlistProvider };