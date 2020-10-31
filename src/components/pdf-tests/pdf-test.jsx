import React, { Fragment } from "react"
// import ReactDOM from 'react-dom';
// import { Page, Document, View, Text} from "@react-pdf/renderer";
import { PDFDownloadLink, Document, Page, Text, Link, Canvas } from '@react-pdf/renderer'

const DocToRender = () => {
  return (
    <Document>
      <Page >
        <Text >I am inside PDFTest
      This is a link to <Link src="https://www.google.com"> Google</Link>
        </Text>
        <Canvas
          style={{ width: 100, height: 120, backgroundColor: "pink" }}>
        </Canvas>
      </Page>
    </Document>
  )
}

export const PDFTest = () => (
  <div style={{ marginTop: "10vh" }}>
    <PDFDownloadLink document={<DocToRender />} fileName="pdfTest.pdf" >
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
)

