import React from "react";
import PdfViewer from "./PdfRead";

const DevDetail = ({data}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600">Detail Laporan</h1>
            <PdfViewer />
            
        </div>
    );
}

export default DevDetail;
