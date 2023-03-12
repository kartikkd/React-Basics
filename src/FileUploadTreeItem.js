import React, { useState } from "react";
import { TreeItem } from '@ui5/webcomponents-react';

function FileUploadTreeItem({ label }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleFileUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      fetch("/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("File uploaded:", result);
          setFile(null);
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    }
  };

  return (
    <TreeItem label={label}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload} disabled={!file}>
          Upload the file
        </button>
      </div>
    </TreeItem>
  );
}

export default FileUploadTreeItem;
