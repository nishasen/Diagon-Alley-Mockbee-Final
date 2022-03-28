export const Reducer = (cartState, cartAction) => {
    switch(cartAction.type) {
        case "SET_CART" : return { ...cartState, cartItems: cartAction.payload };
        case "ADD_TO_CART": return { ...cartState, cartItems: cartAction.payload };
        case "REMOVE_FROM_CART" : return { ...cartState, cartItems: cartAction.payload };
        case "INCR_DECR_QTY": return { ...cartState, cartItems: cartAction.payload };
        default: return cartState;
    }
}