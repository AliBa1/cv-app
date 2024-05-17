/* eslint-disable react/prop-types */
import html2canvas from 'html2canvas';
import { Document, Packer, Paragraph, ImageRun } from 'docx';
import { saveAs } from 'file-saver';

const ScreenshotToDocx = ({ id }) => {
  const captureAndExport = async () => {
    const element = document.getElementById(id);
    if (!element) {
      console.error(`No element found with id: ${id}`);
      return;
    }
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');

    // Convert base64 image to a byte array
    const base64Data = imgData.split(',')[1];
    const binaryString = window.atob(base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // Create DOCX document
    const doc = new Document();
    const image = new ImageRun({
      data: bytes.buffer,
      transformation: {
        width: canvas.width,
        height: canvas.height,
      },
    });

    doc.addSection({
      children: [
        new Paragraph({
          children: [image],
        }),
      ],
    });

    // Export DOCX document
    const blob = await Packer.toBlob(doc);
    saveAs(blob, 'resume.docx');
  };

  return (
    <div>
      <button onClick={captureAndExport} style={{backgroundColor: 'darkslateblue', marginBottom: '1rem'}}>Capture and Export as DOCX</button>
    </div>
  );
};

export default ScreenshotToDocx;
