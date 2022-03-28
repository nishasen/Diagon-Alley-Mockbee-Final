export const CalculateTotal = (cartItems) => {
    const priceObj = {
        price: 0,
        actualPrice: 0,
        discountPrice: 0
    }
    const {price, actualPrice, discountPrice} = cartItems.reduce(
            (acc, cur) => ({...acc, 
                price: acc.price + cur.productPrice * cur.qty,
                actualPrice: acc.actualPrice + cur.productActualPrice * cur.qty, 
                discountPrice: acc.discountPrice + cur.productActualPrice * cur.qty - cur.productPrice * cur.qty}), 
                priceObj);
   
    return {price, actualPrice, discountPrice};   
} 