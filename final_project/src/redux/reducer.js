const initialState = {
    coins: [],
    "issuing-country": "all",
    metal: "all",
    quality: "bu",
    "price-from": "",
    "price-to": "",
    "year-from": "",
    "year-to": "",
    currentCoin: {},
    isFiltered: false,
    searchValue: "",
    hasChangedFilter: false,
    coinType: 0
}
function reducer(state = initialState, action) {
    const copy = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case 'LOAD':
            copy.coins = action.payload;
            return copy;
        case 'LOADING':
            copy.currentCoin = action.payload;
            return copy;
        case 'CHANGE_FILTER_STAT':
            copy.hasChangedFilter = true;
            copy.isFiltered = action.payload;
            return copy;
        case 'CHANGE_SEARCH_VAL':
            copy.hasChangedFilter = true;
            copy.searchValue = action.payload;
            return copy;
        case 'ADVANCED_FILTER':
            copy[action.payload.name] = action.payload.value;
            return copy;
        case 'COINTYPE':
            copy.coinType = action.payload;
            return copy;
        default:
            return state;
    }
}

export default reducer;