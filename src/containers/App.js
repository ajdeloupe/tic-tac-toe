import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './App.css';
import * as types from '../actions/actionTypes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      return {counter: prevState.counter + 1}
    });
  }
  render() {
    //const {prop1,prop2} = this.props;
    return (
      <div onClick={this.handleClick}>
        {this.state.counter}
      </div>
    );
  }
}
App.propTypes = {
  //prop1: PropTypes.string.isRequired,
  //prop2: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    //prop1: state.prop1,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    /*prop2: () => {
      dispatch( {type: types.ACTION_TYPE})
    }*/
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);