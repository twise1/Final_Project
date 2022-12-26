import React,{Component} from "react";
import store from './../../redux/store';
import Search from "../Search";
import "./Home1.css"
import filter from './img/filter.svg';
export default class Home1 extends Component {
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
    filter_Click = _ => {
        store.dispatch({
            type: "CHANGE_FILTER_STAT",
            payload: !store.getState().isFiltered
        });
    }
    render() {
        return (
            <header className="homepage">
                <h1 className="homepage-head">Homepage</h1>
                <Search />
                <div className="filter" onClick={this.filter_Click}>
                    <div className="filter-link">Advanced filter</div>
                    <img src={filter} alt="sign" className="filter1"/>
                </div>
            </header>
        );
    }
}