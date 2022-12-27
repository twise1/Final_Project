import React from "react";
import store from "../../redux/store";
import './AdvancedFilter.css';
export default class AdvancedFilter extends React.Component {
    state = {
        issuingCountry: "all",
        metal: "all",
        quality: "bu",
        priceFrom: "",
        priceTo: "",
        yearFrom: "",
        yearTo: ""
    }
    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ issuingCountry: state["issuing-country"], metal: state.metal, quality: state.quality, priceFrom: state["price-from"], priceTo: state["price-to"], yearFrom: state["year-from"], yearTo: state["year-to"] });
        });
    }
    changeValue = (event) => {
        store.dispatch({
            type: "ADVANCED_FILTER",
            payload: event.target
        });
    }
    render() {
        return (
            <form action="" className="filters">
                <div className="selects">
                    <div className="select-box">
                        <label htmlFor="issuing-country">Issuing country</label>
                            <select value={this.state.issuingCountry} name="issuing-country" id="issuing-country" onChange={this.changeValue}>
                                <option value="all">All</option>
                                <option value="canada">Canada</option>
                                <option value="united states of america">USA</option>
                                <option value="the republic of vietnam">The Republic of Vietnam</option>
                                <option value="british south africa">British South Africa</option>
                                <option value="estonia">Estonia</option>
                                <option value="the belgian congo">The Belgian Congo</option>
                                <option value="france">France</option>
                                <option value="australia">Australia</option>
                                <option value="bolivia">Bolivia</option>
                                <option value="botswana">Botswana</option>
                                <option value="british virgin islands">British Virgin Islands</option>
                                <option value="ghana">Ghana</option>
                                <option value="the weimar republic">The Weimar Republic</option>
                                <option value="egypt">Egypt</option>
                                <option value="india">India</option>
                                <option value="iran">Iran</option>
                                <option value="iceland">Iceland</option>
                                <option value="yemen">Yemen</option>
                                <option value="china">China</option>
                                <option value="costa rica">Costa Rica</option>
                                <option value="portugal">Portugal</option>
                            </select>
                    </div>
                    <div className="select-box">
                        <label htmlFor="metal">Metal</label>
                            <select value={this.state.metal} name="metal" id="metal" onChange={this.changeValue}>
                                <option value="all">All</option>
                                <option value="nickel">Nickel</option>
                                <option value="gold">Gold</option>
                                <option value="steel">Steel</option>
                                <option value="silver">Silver</option>
                            </select>
                    </div>
                    <div className="select-box">
                        <label htmlFor="quality">Quality of the coin</label>
                            <select value={this.state.quality} name="quality" id="quality" onChange={this.changeValue}>
                                <option value="bu">BU</option>
                            </select>
                    </div>
                </div>
                <div className="inputs">
                    <div className="inputs-container">
                        <div className="inputs-label">Price</div>
                        <div className="inputs-box">
                            <div className="input-box">
                                <label htmlFor="price-from">from</label>
                                    <input value={this.state.priceFrom} type="number" name="price-from" id="price-from" onChange={this.changeValue} />
                            </div>
                            <div className="input-box">
                                <label htmlFor="price-to" className="to">to</label>
                                    <input value={this.state.priceTo} type="number" name="price-to" id="price-to" onChange={this.changeValue} />
                            </div>
                        </div>
                    </div>
                    <div className="inputs-container">
                        <div className="inputs-label">Year of issue</div>
                        <div className="inputs-box">
                            <div className="input-box">
                                <label htmlFor="year-from">from</label>
                                    <input value={this.state.yearFrom} type="number" name="year-from" id="year-from" onChange={this.changeValue} />
                            </div>
                            <div className="input-box">
                                <label htmlFor="year-to" className="to">to</label>
                                    <input value={this.state.yearTo} type="number" name="year-to" id="year-to" onChange={this.changeValue} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}