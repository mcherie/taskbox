import React, { Fragment } from "react"
import { PDFDownloadLink, Document, Page, Text, Link, Canvas, Image } from '@react-pdf/renderer'
import { ImageSample } from "./../../assets/1.PNG"

const axios = require('axios').default

// axios.get(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://www.123rf.com/photo_114320769_stock-vector-vector-antonyms-and-opposites-cartoon-characters-illustration-on-white-background-card-for-children-.html?vti=liuhmmuoi37el90yoo-1-2`)

const DocToRender = () => {
  return (
    <Document>
      <Page >
        <Text >I am inside PDFTest
          This is a link to <Link src="https://www.google.com"> Google</Link>
        </Text>
        <Image src="./../../../assets/1.PNG"/>
        <Text > This is the second paragraph </Text>
        <Canvas
          style={{ width: 100, height: 120, backgroundColor: "pink" }}>
        </Canvas>
        {/* <Image src={{ImageSample}} /> */}
        {/* <Image src="https://cors-anywhere.herokuapp.com/https://www.123rf.com/photo_114320769_stock-vector-vector-antonyms-and-opposites-cartoon-characters-illustration-on-white-background-card-for-children-.html?vti=liuhmmuoi37el90yoo-1-2" /> */}
      </Page>
    </Document>
  )
}

export const PDFTest = () => {

  return (
    <div style={{ marginTop: "10vh" }}>
      <PDFDownloadLink document={<DocToRender />} fileName="pdfTest.pdf" >
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now from pdf-test!')}
      </PDFDownloadLink>
    </div>
  )


}
