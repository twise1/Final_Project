import React from "react";
import store from './../../redux/store';
import SearchBox from "../SearchBox";
import './assets/styles/Homepage.css';
import filterSign from './assets/images/filter-sign.svg';
export default class Homepage extends React.Component {
    state = {
        isFiltered: false,
        searchValue: "",
        hasChangedFilter: false
    }

    componentDidMount() {
        localStorage.setItem("coinType", JSON.stringify(0));
        localStorage.setItem("state", JSON.stringify({
            searchValue: "",
            issuingCountry: "all",
            metal: "all",
            priceFrom: "",
            priceTo: "",
            yearFrom: "",
            yearTo: ""
        }));
    }

    filterClick = _ => {
        store.dispatch({
            type: "CHANGE_FILTER_STATUS",
            payload: !store.getState().isFiltered
        });
    }

    render() {
        return (
            <header className="homepage">
                <h1 className="homepage-header">Homepage</h1>
                <SearchBox />
                <div className="filter" onClick={this.filterClick}>
                    <div className="filter-link">Advanced filter</div>
                    <img src={filterSign} alt="sign" className="filter-sign"/>
                </div>
            </header>
        );
    }
}