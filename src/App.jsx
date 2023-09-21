import React, { useState } from 'react';
import UploadPDF from "./Components/UploadPdf";
import PDFViewer from './Components/PdfReader';
import Assistant from './Components/Assistant';

function App() {
  const [pdfFile, setPDFFile] = useState(null);

  const handlePDFUpload = (file) => {
    setPDFFile(file);
  };

  return (
    <div className="App">
      <h1>PDF Assistant</h1>
      <UploadPDF onPDFUpload={handlePDFUpload} />
      {pdfFile && <PDFViewer pdfFile={pdfFile} />}
      {pdfFile && <Assistant apiKey="YOUR_API_KEY" />}
    </div>
  );
}

export default App;
