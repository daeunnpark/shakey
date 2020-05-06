import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Uploader = () => {
  const [selectedFile, selectFile] = useState(null);

  const onChangeHandler = event => {
    selectFile(event.target.files[0]);
  };

  let history = useHistory();
  const onNextHandler = event => {
    const data = new FormData();
    data.append('file', selectedFile);
    axios.post("http://localhost:8000/upload", data, {}).then(res => {
      console.log(res.statusText);
    });
    history.push("/zoom");
  };

  return (
    <div>
      <input type="file" name="file" onChange={onChangeHandler}/>
      <button type="button" className="btn btn-success btn-block" onClick={onNextHandler}>Next</button>
    </div>
  );
}

export default Uploader;
