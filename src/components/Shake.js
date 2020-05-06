import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Shake = () => {
  let history = useHistory();
  const onPrevHandler = event => {
    history.push("zoom");
  };
  const onNextHandler = event => {
  };



  return (
    <div>
      <div> Preview comes here </div>
      <button type="button" className="btn btn-success btn-block" onClick={onPrevHandler}>Prev</button>
      <button type="button" className="btn btn-success btn-block" onClick={onNextHandler}>Download</button>
    </div>
  );
}

export default Shake;
