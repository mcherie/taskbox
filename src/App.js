import React, { Component } from 'react';
import './App.css';
import { DatePicker } from './components/date-picker/date-picker';
import { NestedCheckboxes } from './components/nested-menu/nested-checkboxes';
import { NestedRoot } from './components/nested-menu/nested-root';
import { OptionsRoot } from './components/nested-menu/options-root';
import Card from "./components/drag-n-drop/drag-n-drop"
import { BarD3 } from './components/bar-d3';
import { PDFTest } from './components/pdf-tests/pdf-test';
import ReactPDF, { Page, Document, PDFViewer, PDFDownloadLink} from '@react-pdf/renderer'
import { EnhancedTable } from "./components/tables/material-ui-table"
import { PDFCanvg } from './components/pdf-tests/pdf-canvg';
import { CanvgTest } from "./components/pdf-tests/canvg-test"
import { ReactToPDF } from './components/pdf-tests/react-to-pdf';

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
        {/* <PDFTest style={{padding: "5vh"}}/> // this works except for renderring an Image */}
        {/* <PDFCanvg/> */}
        {/* <PDFViewer> <PDFTest /> </PDFViewer> */}
        {/* <EnhancedTable /> */}
        <CanvgTest />
        {/* <ReactToPDF /> // this works as a screenshot */}
      </div>
    );
  }
}


export default App;
