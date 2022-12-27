import React from "react";
import SearchBox from "../../components/SearchBox";
import AdvancedFilter from "../../components/AdvancedFilter/AdvancedFilter";
import store from '../../redux/store';
import getData from "../../redux/actions";
import './assets/Listpage.css';
import filterSign from './assets/images/filter-sign.svg';
export default class Listpage extends React.Component {
    state = {
        coins: [

        ],

        isFiltered: false
    }

    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ coins: state.coins, isFiltered: state.isFiltered });
        })

        store.dispatch(getData());
    }

    homeClick = _ => {
        window.location.href="/"
    }

    filterClick = _ => {
        store.dispatch({
            type: "CHANGE_FILTER_STATUS",
            payload: !store.getState().isFiltered
        });
    }

    coinClick = id => {
        window.location.href=`/coins/${id}`;
    }

    render() {
        return (
            <div className="listPage">
                <header className="listpage">
                    <h1 className="listpage-header">List of the coins</h1>
                    <div className="return-home"><span className="return-homepage" onClick={this.homeClick}>Homepage</span> - List of the coins</div>
                    <SearchBox />
                    <div className="filter" onClick={this.filterClick}>
                        <div className="filter-link">Advanced filter</div>
                        <img src={filterSign} alt="sign" className="filter-sign" />
                    </div>
                </header>
                {
                    !this.state.isFiltered?
                        <main>
                            <section className="coins">
                                {
                                    this.state.coins?
                                        this.state.coins.map(coin => 
                                            (
                                            <article key={coin.id} className="coin">
                                                <img src={coin.first.toString()} alt="coin" className="coin-picture" referrerPolicy="no-referrer"/>
                                                
                                                <div className="coin-descript">
                                                    <h2 className="coin-header" onClick={_ => this.coinClick(coin.id)}>{coin.name}</h2>
                                                    <p className="coin-info">{coin.description}</p>
                                                </div>
                                            </article>
                                        ))
                                        :
                                        null
                                }
                            </section>
                        </main>
                        :
                        <AdvancedFilter />
                }
            </div>
        );
    }
}