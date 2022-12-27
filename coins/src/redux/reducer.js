const initialState = {
    coins: [
    ],

    currentCoin: {},

    isFiltered: false,

    searchValue: "",

    hasChangedFilter: false,

    "issuing-country": "all",

    metal: "all",

    quality: "bu",

    "price-from": "",

    "price-to": "",

    "year-from": "",

    "year-to": "",

    coinType: 0
}

function reducer(state = initialState, action) {
    const clone = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case 'LOAD':
            clone.coins = action.payload;
            return clone;
        case 'LOADING':
            clone.currentCoin = action.payload;
            return clone;
        case 'CHANGE_FILTER_STATUS':
            clone.hasChangedFilter = true;
            clone.isFiltered = action.payload;
            return clone;
        case 'CHANGE_SEARCH_VALUE':
            clone.hasChangedFilter = true;
            clone.searchValue = action.payload;
            return clone;
        case 'ADVANCED_FILTER':
            clone[action.payload.name] = action.payload.value;
            return clone;
        case 'COINTYPE':
            clone.coinType = action.payload;
            return clone;
        default:
            return state;
    }
}

export default reducer;