import React from "react"
import { Page, Document, View, Text} from "@react-pdf/renderer";

export const PDFTest = () => {
  return (
    <Document>
    <Page> <View> <Text>I am inside PDFTest </Text></View></Page>
    </Document>
  )
}

// const PDFTest = (
//   <Document>
//      <Page> <View> <Text>I am inside PDFTest </Text></View></Page>
//   </Document>
// )

