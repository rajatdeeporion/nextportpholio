// components/PDFViewer.tsx
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Define props interface
interface PDFViewerProps {
  fileUrl: string;
}

// Optionally, you can configure pdfjs to use a worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js`;

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Document
        file={fileUrl}
        onLoadError={(error) => console.error('Error loading PDF: ', error)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PDFViewer;
