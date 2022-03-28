const Compose = (state, ...functions) => (data) => {
    return functions.reduce((acc, cur)=>cur(state, acc), data)
}

const setHouse = (state, data) => state.house!=="" ? data?.filter(product=>product.productHouse===state.house) : data;


const setCategory = (state, data) => state.category!=="" ? data?.filter(product=>product.categoryName===state.category) : data;

const setPriceSort = (state, data) => {
    const modifyData = [...data];
    switch (state.sortBy) {
    case "HIGH_TO_LOW":
      return modifyData.sort((a, b) => b.productPrice - a.productPrice);
    case "LOW_TO_HIGH":
      return modifyData.sort((a, b) => a.productPrice - b.productPrice);
    default:
      return data;
  }
};

const checkStock = (state, data) => state.onlyInStock ? data?.filter(item => item.productStock === true) : data;

const checkFastDelivery = (state, data) => state.fastDelivery ? data?.filter(item => item.fastDelivery === true) : data;

const check4AboveRating = (state, data) => state.ratingAbove4 ? data?.filter(item => item.productRating >=4) : data;

const showNewProduct = (state, data) => state.newProduct ? data?.filter(item => item.productAddedInMonths===1) : data;

const setRange = (state, data) => data.filter(item => item.productPrice <= state.range);

const setHouseState = (state, data) => state.houseState.length===0 ? 
  data : data.filter(product=>state.houseState.includes(product.productHouse));

  const setCategoryState = (state, data) => state.categoryState.length===0 ? 
  data : data.filter(product=>state.categoryState.includes(product.categoryName));

export { Compose, 
    setHouse, 
    setCategory,
    setPriceSort,
    checkStock,
    checkFastDelivery,
    check4AboveRating,
    showNewProduct,
    setRange,
    setHouseState,
    setCategoryState };

