import React, { useState } from 'react';

const UploadPDF = ({ onPDFUpload }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onPDFUpload(file);
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
    </div>
  );
};

export default UploadPDF;
