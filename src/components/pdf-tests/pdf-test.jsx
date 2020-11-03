import React, { Fragment, useState } from "react"
import { PDFDownloadLink, Document, Page, Text, Link, Canvas, Image } from '@react-pdf/renderer'
import { ImageSample } from "./../../assets/1.PNG"
import { image } from "d3"

const axios = require('axios').default
// axios.get(`https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://www.123rf.com/photo_114320769_stock-vector-vector-antonyms-and-opposites-cartoon-characters-illustration-on-white-background-card-for-children-.html?vti=liuhmmuoi37el90yoo-1-2`)

// const image1 = "https://styinthesky.files.wordpress.com/2012/12/bah1.jpg?w=320"

const DocToRender = () => {
  return (
    <Document>
      <Page >
        <Text >I am inside PDFTest
          This is a link to <Link src="https://www.google.com"> Google</Link>
        </Text>
        <Image src="http://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg" />
        {/* <Image cache={false} src="./../../../assets/1.PNG"/> */}
        {/* <Image src="https://styinthesky.files.wordpress.com/2012/12/bah1.jpg?w=320" crossorigin="anonymous" cache={false}/> */}
        <Text > This is the second paragraph </Text>
        {/* <Image src="http://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg" /> */}
        <Canvas style={{ width: 100, height: 120, backgroundColor: "pink" }}>
          
        </Canvas>
        {/* <Image src={{ImageSample}} /> */}
        {/* <Image src="https://cors-anywhere.herokuapp.com/https://www.123rf.com/photo_114320769_stock-vector-vector-antonyms-and-opposites-cartoon-characters-illustration-on-white-background-card-for-children-.html?vti=liuhmmuoi37el90yoo-1-2" /> */}
      </Page>
    </Document>
  )
}
// const img = new Image()
// img.src = "http://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg"

const canvas = document.createElement('canvas');
// const img = document.getElementById('Img1')
// canvas.height = img.naturalHeight;
// canvas.width = img.naturalWidth;
// const ctx = canvas.getContext('2d');

// ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// const base64String = canvas.toDataURL();

// console.log("base64String", base64String)

export const PDFTest = () => {

  return (
    <div style={{ marginTop: "10vh" }}>
      <img id='Img1' src="http://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg"></img>
      {DocToRender()}
      <PDFDownloadLink document={<DocToRender />} fileName="pdfTest.pdf" >
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now from pdf-test!')}
      </PDFDownloadLink>
    </div>
  )


}
