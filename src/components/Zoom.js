import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Zoom = () => {
  let history = useHistory();
  const onPrevHandler = event => {
    history.push("upload");
  };
  const onNextHandler = event => {
    history.push("shake");
  };



  return (
    <div>
      <div> Choose a spot to zoom </div>
      <div> Preview comes here </div>
      <button type="button" className="btn btn-success btn-block" onClick={onPrevHandler}>Prev</button>
      <button type="button" className="btn btn-success btn-block" onClick={onNextHandler}>Next</button>
    </div>
  );
}

export default Zoom;
