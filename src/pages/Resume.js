import React, { useState, useEffect } from "react";
import pdf from "../assets/pdf/JawonResume2023.pdf";
import { FaDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/jwinbush/newportfolio2023/master/src/assets/pdf/JawonResume2023.pdf";


export default function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="center px-10 pt-28 bg-black flex justify-center h-full">
      <div fluid className="resume-section">
        <div>
          <button className="flex rounded-md text-black bg-gradient-to-br from-cyan-400 via-emerald-300 to-cyan-400 hover:bg-gradient-to-br  shadow-lg shadow-cyan-400/60 animate-text px-3 py-2"
            variant="primary"
            href={pdf}
            target="_blank"
            
          >
            <FaDownload />
            &nbsp;Download CV
          </button>
        </div>

        <div className="resume">
          <Document file={resumeLink} className=" ">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>

        
      </div>
    </div>
  );
}
