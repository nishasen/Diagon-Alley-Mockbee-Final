import { createContext, useContext, useReducer } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { useAuth } from '..';
import { GetCart } from '../../APICall';
import { Reducer } from './Reducer';

const CartContext = createContext();
const useCart = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(Reducer, {cartItems: []});
    const { response, cartLoading, error } = GetCart();

    useEffect(()=>{
        cartDispatch({type: "SET_CART", payload: response.cart || []})  
    }, [response])
    
    return (
        <CartContext.Provider value={{cartState, cartDispatch, cartLoading, error}}>
            {children}
        </CartContext.Provider>
    );
}

export { useCart, CartProvider };