export const TotalCartQuantity = (cartArray, cartTotal, setCartTotal) => {
    const calculateCartQuantity = cartArray.reduce(
        (acc, cur) => acc = acc + cur.qty,
        0
      );
      
    setCartTotal({...cartTotal, totalQuantity: calculateCartQuantity});
}