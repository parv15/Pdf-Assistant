import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewer = ({ pdfFile }) => {
  return (
    <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
