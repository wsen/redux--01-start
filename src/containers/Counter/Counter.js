import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.myCounter('INCREMENT')} />
                <CounterControl label="Decrement" clicked={() => this.props.myCounter('DECREMENT')}  /> 
             {/*   <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  /> */}
                <CounterControl label="Add 5" clicked={() => this.props.myCounter('ADD')}  /> 
                <CounterControl label="Subtract 5" clicked={() => this.props.myCounter('SUBTRACT')}  />
            </div>
        );
    }
}

const mapStateToProps = state => { return {ctr:state.counter}; };
const mapDispatchToProps = dispatch => ({myCounter:myType => dispatch({type:myType})});      

export default connect(mapStateToProps, mapDispatchToProps)(Counter);