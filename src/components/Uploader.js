import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Uploader = () => {
  //const [selectedFile, selectFile] = useState(null);
  const onChangeHandler = event => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    axios.post("http://localhost:8000/upload", data, {})
    .then(res => {
      console.log(res.statusText);
    });
  };

  return (<input type="file" name="file" onChange={onChangeHandler}/>);
}

export default Uploader;
