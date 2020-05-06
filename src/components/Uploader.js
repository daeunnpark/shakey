import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Uploader = () => {
  const [selectedFile, selectFile] = useState(null);
  const onChangeHandler = event => {
    selectFile(event.target.files[0]);
  };

  const onClickHandler = event => {
    const data = new FormData();
    data.append('file', selectedFile);
    axios.post("http://localhost:8000/upload", data, {})
    .then(res => {
      console.log(res.statusText);
    });
  };

   return (
     <div>
       <input type="file" name="file" onChange={onChangeHandler}/>
       <button type="button" class="btn btn-success btn-block" onClick={onClickHandler}>Next</button>
     </div>);
}

export default Uploader;
