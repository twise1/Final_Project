import React from "react";
import store from './../../redux/store';
import './assets/styles/Homepage1.css';
import bullion from './assets/images/bullion-coins.svg';
import exclusive from './assets/images/exclusive-coins.svg';
import commemorative from './assets/images/commemorative-coins.svg';
export default class Homepage1 extends React.Component {
    state = {
        coinType: 0
    }

    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ coinType: state.coinType });
        })
    }

    bullionClick = _ => {
        store.dispatch({
            type: "COINTYPE",
            payload: 1
        });
        localStorage.setItem("coinType", JSON.stringify(store.getState().coinType));
    }

    exclusiveClick = _ => {
        store.dispatch({
            type: "COINTYPE",
            payload: 2
        });
        localStorage.setItem("coinType", JSON.stringify(store.getState().coinType));
    }

    commemorativeClick = _ => {
        store.dispatch({
            type: "COINTYPE",
            payload: 3
        });
        localStorage.setItem("coinType", JSON.stringify(store.getState().coinType));
    }

    render() {
        return (
            <main className="all-coins">
                <section className="coin-type">
                    <h2 className="coin-type-header">Bullion coins</h2>
                    <a href="/coins" className="show-all" onClick={this.bullionClick}>Show all {">"}</a>
                    <img src={bullion} alt="bullion" className="coin-photo"/>
                </section>
                <section className="coin-type">
                    <h2 className="coin-type-header">Exclusive coins</h2>
                    <a href="/coins" className="show-all" onClick={this.exclusiveClick}>Show all {">"}</a>
                    <img src={exclusive} alt="exclusive" className="coin-photo"/>
                </section>
                <section className="coin-type">
                    <h2 className="coin-type-header">Commemorative coins</h2>
                    <a href="/coins" className="show-all" onClick={this.commemorativeClick}>Show all {">"}</a>
                    <img src={commemorative} alt="commemorative" className="coin-photo"/>
                </section>
            </main>
        );
    }
}