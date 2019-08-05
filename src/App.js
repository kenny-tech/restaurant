import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantList from './components/RestaurantList';

class App extends Component {
  render() {
    return (
      <RestaurantList />
    );  
  }
}

export default App;
