/* eslint-disable react/prop-types */
// import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const ScreenshotToPdf = ({ id }) => {
  const captureAndExport = async () => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`No element found with id: ${id}`);
      return;
    }
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <div>
      <button onClick={captureAndExport} style={{backgroundColor: 'darkred', marginBottom: '1rem'}}>Capture and Export as PDF</button>
    </div>
  );
};

export default ScreenshotToPdf;