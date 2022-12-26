import React,{Component}from "react";
import Search from "../../components/Search";
import AdvancedFilter from "../../components/AdvancedFilter/AdvancedFilter";
import store from '../../redux/store';
import getData from "../../redux/actions";
import './Listpage.css';
import filter from './img/filter.svg';
export default class Listpage extends Component {
    state = {
        coins: [],
        isFiltered: false
    }
    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ coins: state.coins, isFiltered: state.isFiltered });
        })
        store.dispatch(getData());
    }
    home_Click = _ => {
        window.location.href="/"
    }
    filter_Click = _ => {
        store.dispatch({
            type: "CHANGE_FILTER_STAT",
            payload: !store.getState().isFiltered
        });
    }
    coin_Click = id => {
        window.location.href=`/coins/${id}`;
    }
        render() {
        return (
            <div className="listPage">
                <header className="listpage">
                    <h1 className="listpage-header">List of the coins</h1>
                    <div className="return-home"><span className="return-homepage" onClick={this.home_Click}>Homepage</span> - List of the coins</div>
                    <Search />
                    <div className="filter" onClick={this.filter_Click}>
                        <div className="filter-link">Advanced filter</div>
                        <img src={filter} alt="sign" className="filter-sign" />
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
                                                    <h2 className="coin-header" onClick={_ => this.coin_Click(coin.id)}>{coin.name}</h2>
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