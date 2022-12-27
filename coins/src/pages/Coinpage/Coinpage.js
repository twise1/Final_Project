import React from "react";
import store from './../../redux/store';
import getData from "../../redux/actions";
import './assets/Coinpage.css';
export default class Coinpage extends React.Component {
    state = {
        
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

        const id = +this.props.match.params.id;

        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ coin: state.currentCoin });
        })

        store.dispatch(getData(id));
    }

    render() {
        if (this.state.coin) {
            const coin = this.state.coin[0];

            return (
                <div className="body">
                    <div className="coinpage">
                        <div className="coin-images">
                            <img src={coin.first.toString()} referrerPolicy="no-referrer" alt="first" className="coin-image"></img>
                            <img src={coin.second.toString()} referrerPolicy="no-referrer" alt="second" className="coin-image"></img>
                        </div>
                        <div className="coin-description">
                            <div className="about-coin">
                                <h1 className="coin-name">{coin.name}</h1>
                                <pre className="coin-info">{coin.information}</pre>
                                <table className="coin-table">
                                    <tbody>
                                        <tr className="coin-table_odd">
                                            <td className="top left">Issuing Country</td>
                                            <td className="top right">{coin.issuing_country}</td>
                                        </tr>
                                        <tr>
                                            <td className="left">Composition</td>
                                            <td className="right">{coin.composition}</td>
                                        </tr>
                                        <tr className="coin-table_odd">
                                            <td className="left">Quality</td>
                                            <td className="right">{coin.quality}</td>
                                        </tr>
                                        <tr>
                                            <td className="left">Denomition</td>
                                            <td className="right">{coin.denomition}</td>
                                        </tr>
                                        <tr className="coin-table_odd">
                                            <td className="left">Year</td>
                                            <td className="right">{coin.year}</td>
                                        </tr>
                                        <tr>
                                            <td className="left">Weight</td>
                                            <td className="right">{coin.weight}</td>
                                        </tr>
                                        <tr className="coin-table_odd">
                                            <td className="bottom left">Price</td>
                                            <td className="bottom right">{coin.price}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <a href="/coins" className="back-list">Back to the list</a>
                        </div>
                    </div>
                </div>
            );
        }
    }
}