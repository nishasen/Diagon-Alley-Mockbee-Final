export const Reducer = (wishlistState, wishlistAction) => {
    switch(wishlistAction.type) {
        case "SET_WISHLIST" : return { ...wishlistState, wishlistItems: wishlistAction.payload };
        case "ADD_TO_WISHLIST": return { ...wishlistState, wishlistItems: wishlistAction.payload };
        case "REMOVE_FROM_WISHLIST" : return { ...wishlistState, wishlistItems: wishlistAction.payload };
        default: return wishlistState;
    }
}