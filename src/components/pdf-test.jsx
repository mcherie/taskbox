import React, { Fragment } from "react"
// import ReactDOM from 'react-dom';
// import { Page, Document, View, Text} from "@react-pdf/renderer";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
// const { PDFExport, savePDF } = require('@progress/kendo-react-pdf');

export const PDFTest = () => {

  // const exportJustBox = () => {
  //   savePDF(ReactDOM.findDOMNode())
  // }

  return (
    <Fragment>
      <PDFExport>
        I am inside PDFTest

      </PDFExport>
    </Fragment>
  )
}

