import React,{Component} from "react";
import store from "../redux/store";
export default class SearchBox extends Component {
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
            type: "CHANGE_SEARCH_VAL",
            payload: event.target.value
        });
    }
    searchClick = () => {
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
                <label htmlFor="search" className="search-l">Input field</label>
                    <input value={this.state.searchValue} type="text" className="search-inp" onChange={this.searchChange} />
                <button type="submit" className="search-b" disabled={!this.state.hasChangedFilter} onClick={this.searchClick}>Search</button>
            </form>
        )
    }
}