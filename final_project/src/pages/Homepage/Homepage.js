import React,{Component} from 'react';
import store from './../../redux/store';
import Home1 from '../../components/Homepage/Home1';
import Home2 from '../../components/Homepage/Home2';
import AdvancedFilter from '../../components/AdvancedFilter/AdvancedFilter';
export default class Home extends Component {
    state = {}
    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ isFiltered: state.isFiltered });
        });
    }
    render() {
        return (
            <div className='homepage'>
                <Home1 />
                {
                    !this.state.isFiltered ? <Home2 /> :<AdvancedFilter />
                }
            </div>
        );
    }
}