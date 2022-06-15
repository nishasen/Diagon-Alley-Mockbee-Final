export const Reducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE_SIDENAV": return {...state, showSideNav: !state.showSideNav};
        case "OPEN_DROPDOWN": return {...state, showDropdown: true};
        case "CLOSE_DROPDOWN": return {...state, showDropdown: false};
        case "TOGGLE_ADDRESS": return {...state, showAddressBox: !state.showAddressBox};
        default: return state;
    }
}