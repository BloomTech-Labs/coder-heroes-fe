import React, { useState } from 'react';
import axios from 'axios';

export default function() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    axios.post('endpointForFileUploads', fd).then(res => {
      console.log(res);
    });
  };

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
}
