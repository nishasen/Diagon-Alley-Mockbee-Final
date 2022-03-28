const Reducer = (state, action) => {
    localStorage.setItem("theme", action.type);
    return {...state, theme: action.type}
};

export { Reducer };