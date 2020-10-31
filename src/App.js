import React, { Component } from 'react';
import './App.css';
import { DatePicker } from './components/date-picker/date-picker';
import { NestedCheckboxes } from './components/nested-menu/nested-checkboxes';
import { NestedRoot } from './components/nested-menu/nested-root';
import { OptionsRoot } from './components/nested-menu/options-root';
import Card from "./components/drag-n-drop/drag-n-drop"
import { BarD3 } from './components/bar-d3';
// import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer"
import { PDFTest } from './components/pdf-tests/pdf-test';
import ReactPDF, { Page, Document, PDFViewer, } from '@react-pdf/renderer'
import { EnhancedTable } from "./components/tables/material-ui-table"
import { PDFCanvg } from './components/pdf-tests/pdf-canvg';


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
        {/* <PDFTest style={{paddingTop: "5vh"}}/> */}
        <PDFCanvg/>
        {/* <PDFViewer> <PDFTest /> </PDFViewer> */}
        {/* <EnhancedTable /> */}
      </div>
    );
  }
}

// import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer'

// const MyDoc = () => (
//   <Document>
//     <Page>
//       <Text>anything TEXTTT</Text>
//     </Page>
//   </Document>
// )

// const App = () => (
//   <div>
//     <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
//       {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
//     </PDFDownloadLink>
//   </div>
// )

export default App;
