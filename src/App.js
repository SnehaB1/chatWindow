import React from 'react';
import { connect } from "react-redux";
import { storeData } from './actions/api';
import './App.css';
import Dashboard from "./containers/dashboard";
import { chatData } from "./data";

class App extends React.Component {

  UNSAFE_componentWillMount() {
    const { storeData } = this.props;

    storeData(chatData)
  }

  render() {
    return (
      <Dashboard />
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    storeData: (data) => dispatch(storeData(data))
  }
}

export default connect(null, mapDispatchToProps)(App);
