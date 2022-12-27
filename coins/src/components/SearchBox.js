import React from "react";
import store from "../redux/store";
export default class SearchBox extends React.Component {
    state = {
        searchValue: "",
        hasChangedFilter: false
    }

    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ searchValue: state.searchValue, hasChangedFilter: state.hasChangedFilter });
        });
    }

    searchChange = (event) => {
        store.dispatch({
            type: "CHANGE_SEARCH_VALUE",
            payload: event.target.value
        });
    }

    searchClick = (event) => {
        const state = store.getState();
        localStorage.setItem("state", JSON.stringify({
            searchValue: state.searchValue,
            issuingCountry: state["issuing-country"],
            metal: state.metal,
            priceFrom: state["price-from"],
            priceTo: state["price-to"],
            yearFrom: state["year-from"],
            yearTo: state["year-to"]
        }));
        console.log(state);
    }

    render() {
        return (
            <form action="/coins" className="search-form">
                <label htmlFor="search" className="search-label">Input field</label>
                    <input value={this.state.searchValue} type="text" className="search-input" onChange={this.searchChange} />
                <button disabled={!this.state.hasChangedFilter} type="submit" className="search-button" onClick={this.searchClick}>Search</button>
            </form>
        )
    }
}