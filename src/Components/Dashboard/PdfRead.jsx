import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import React, { useEffect, useState } from 'react';
import testfile from '../../data/testfile.pdf';

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import axios from 'axios';
import { Document, Page, pdfjs } from 'react-pdf';

const pdfUrl = 'https://www.soundczech.cz/temp/lorem-ipsum.pdf';
const url = "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"

const PdfViewer = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    pdfjs.GlobalWorkerOptions.workerSrc =  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    return (
        // <div>
        //     <iframe src={pdfUrl} width="100%" height="500px"></iframe>
        //     <button onClick={downloadPdf}>Unduh PDF</button>
        // </div>
        // <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
        //     <div
        //         style={{
        //             height: '750px',
        //             width: '900px',
        //             marginLeft: 'auto',
        //             marginRight: 'auto',
        //         }}
        //     >
        //         <Viewer
        //             fileUrl={pdfUrl}
        //             httpHeaders={{
        //                 "AllowedHeaders": "*",
        //                 "AllowedOrigins": "*",
        //                 'Content-Type': 'application/json',
        //                 'Accept': 'application/pdf',
        //             }}
        //             plugins={[defaultLayoutPluginInstance]}
        //         />
        //     </div>
        // </Worker>
        <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
    );
};

export default PdfViewer;
