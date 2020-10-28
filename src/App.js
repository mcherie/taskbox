import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DatePicker } from './components/date-picker/date-picker';
import { NestedCheckboxes } from './components/nested-menu/nested-checkboxes';
import { NestedRoot } from './components/nested-menu/nested-root';
import { OptionsRoot } from './components/nested-menu/options-root';
import Card from "./components/drag-n-drop/drag-n-drop"
import { BarD3 } from './components/bar-d3';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import { PDFTest } from './components/pdf-test';
// import ReactPDF, { Page, Document, PDFViewer } from '@react-pdf/renderer'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <DatePicker /> */}
        {/* <NestedCheckboxes /> */}
        {/* <NestedRoot /> */}
        {/* <OptionsRoot /> */}
        {/* <Card /> */}
        {/* <BarD3 /> */}
        {/* <PDFTest /> */}
        <PDFViewer> <PDFTest /> </PDFViewer>
      </div>
    );
  }
}

export default App;
