import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from './components/date-picker/date-picker';
import { NestedCheckboxes } from './components/nested-menu/nested-checkboxes';
import { NestedRoot } from './components/nested-menu/nested-root';
import { OptionsRoot } from './components/nested-menu/options-root';
import Card from "./components/drag-n-drop/drag-n-drop"
import { Something } from './components/d3-practice';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <DatePicker /> */}
        {/* <NestedCheckboxes /> */}
        {/* <NestedRoot /> */}
        {/* <OptionsRoot /> */}
        {/* <Card /> */}
        <Something />
      </div>
    );
  }
}

export default App;
