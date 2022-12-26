import React,{Component} from "react";
import store from './../../redux/store';
import './Home2.css';
import bullion from './img/Bullion.svg';
import exclusive from './img/Exclusive.svg';
import commemorative from './img/Commemorative.svg';
export default class Home2 extends Component{
    state = {
        coinType: 0
    }
    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ coinType: state.coinType });
        })
    }
    bullion_Click = _ => {
        store.dispatch({
            type: "COINTYPE",
            payload: 1
        });
        localStorage.setItem("coinType", JSON.stringify(store.getState().coinType));
    }
    exclusive_Click = _ => {
        store.dispatch({
            type: "COINTYPE",
            payload: 2
        });
        localStorage.setItem("coinType", JSON.stringify(store.getState().coinType));
    }
    commemorative_Click = _ => {
        store.dispatch({
            type: "COINTYPE",
            payload: 3
        });
        localStorage.setItem("coinType", JSON.stringify(store.getState().coinType));
    }
    render() {
        return (
            <main className="all">
                <section className="coin-type">
                    <h2 className="coin-type-head">Bullion coins</h2>
                    <a href="/coins" className="show-all" onClick={this.bullion_Click}>Show all {">"}</a>
                    <img src={bullion} alt="bullion" className="photo"/>
                </section>
                <section className="coin-type">
                    <h2 className="coin-type-head">Exclusive coins</h2>
                    <a href="/coins" className="show-all" onClick={this.exclusive_Click}>Show all {">"}</a>
                    <img src={exclusive} alt="exclusive" className="photo"/>
                </section>
                <section className="coin-type">
                    <h2 className="coin-type-head">Commemorative coins</h2>
                    <a href="/coins" className="show-all" onClick={this.commemorative_Click}>Show all {">"}</a>
                    <img src={commemorative} alt="commemorative" className="photo"/>
                </section>
            </main>
        );
    }
}