const Reducer = (state, action) => {
    const defaultFilter = {
        house: "",
        category: "",
        sortBy: "",
        newProduct: false,
        onlyInStock: false,
        fastDelivery: false,
        ratingAbove4: false,
        range: 3000,
        houseState: [],
        categoryState: [],
    }
    switch(action.type){
        case "HOME_HOUSE": return {...state, category: "", house: action.payload};
        case "HOME_CATEGORY": return {...state, house: "", category: action.payload};
        case "HOUSE_FILTER": const newHouse = state.houseState.includes(action.payload) ? 
                                state.houseState.filter(item=>item!==action.payload) : [...state.houseState, action.payload];
                            return {...state, houseState: newHouse};    
        case "CATEGORY_FILTER": const newCategory = state.categoryState.includes(action.payload) ? 
                                    state.categoryState.filter(item=>item!==action.payload) : [...state.categoryState, action.payload];
                                return {...state, categoryState: newCategory};
        case "SORT_BY": return {...state, sortBy: action.payload};
        case "EXCLUDE_OUT_OF_STOCK": return {...state, onlyInStock: action.payload};
        case "SHOW_FAST_DELIVERY": return {...state, fastDelivery: action.payload};
        case "RATING_ABOVE_4_STAR": return {...state, ratingAbove4: action.payload};
        case "SHOW_NEW_PRODUCT": return {...state, newProduct: action.payload};
        case "PRICE_RANGE": return {...state, range: action.payload};
        case "CLEAR_FILTERS": return defaultFilter;
        default: return state;
    }
}

export { Reducer };