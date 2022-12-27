import store from './store';

function getData(id) {
    const state = JSON.parse(localStorage.getItem("state"));
    state.coinType = JSON.parse(localStorage.getItem("coinType"));
    if (arguments.length === 0)
        return async _ => {
            try {
                let data = await fetch(`http://localhost:5000/coins`)
                .then(res => res.json());

                switch (state.coinType) {
                    case 1:
                        data = data.filter(item => item.type === "bullion");
                        break;
                    case 2:
                        data = data.filter(item => item.type === "exclusive");
                        break;
                    case 3:
                        data = data.filter(item => item.type === "commemorative");
                        break;
                    default:
                        break;
                }
                data = data.filter(item => item.name.toUpperCase().includes(state.searchValue.toUpperCase()) || item.description.toUpperCase().includes(state.searchValue.toUpperCase()));
                data = data.filter(item => state.issuingCountry === "all" || item.issuing_country.toUpperCase() === state.issuingCountry.toUpperCase());
                data = data.filter(item => state.metal === "all" || item.composition.toUpperCase() === state.metal.toUpperCase());
                if (state.priceFrom !== "")
                    data = data.filter(item => +item.price.slice(0, -1) >= state.priceFrom);
                if (state.priceTo !== "")
                    data = data.filter(item => +item.price.slice(0, -1) <= +state.priceTo);
                if (state.yearFrom !== "")
                    data = data.filter(item => +item.year >= state.yearFrom);
                if (state.yearTo !== "")
                    data = data.filter(item => +item.year <= +state.yearTo);

                store.dispatch({
                    type: "LOAD",
                    payload: data
                });
            }

            catch {
                store.dispatch({
                    type: "ERROR"
                });
            }
        }
    else if (arguments.length === 1) {
        return async _ => {
            try {
                const data = await fetch(`http://localhost:5000/coins/${id}`)
                .then(res => res.json());

                store.dispatch({
                    type: "LOADING",
                    payload: data
                });
            }

            catch {
                store.dispatch({
                    type: "ERROR"
                });
            }
        }
    }
}

export default getData;