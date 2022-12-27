import React from 'react';
import store from './../../redux/store';
import Homepage from '../../components/Homepage/Homepage';
import Homepage1 from '../../components/Homepage/Homepage1';
import AdvancedFilter from '../../components/AdvancedFilter/AdvancedFilter';

export default class Home extends React.Component {
    state = {
        
    }

    componentDidMount() {
        store.subscribe(_ => {
            const state = store.getState();
            this.setState({ isFiltered: state.isFiltered });
        });
    }

    render() {
        return (
            <div className='homepage'>
                <Homepage />
                {
                    !this.state.isFiltered?
                        <Homepage1 />
                        :
                        <AdvancedFilter />
                }
            </div>
        );
    }
}