import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import parseBinary from "./Functions/parseBinary";

function App() {
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (file) {
      let fileReader: FileReader = new FileReader();
      fileReader.onload = (event: ProgressEvent<FileReader>) => {
        parseBinary(event);
      };
      fileReader.readAsArrayBuffer(file);
    }
  }, [file]);
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
      }}
    >
      <input
        type="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) setFile(e.target.files[0]);
        }}
      />
    </div>
  );
}

export default App;
