import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const Logo = () => {
  let history = useHistory();
  useEffect(() => {
     const timer = setTimeout(() => {
       history.push("/upload");
     }, 3000);
     return () => clearTimeout(timer);
   }, []);

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <h1> SHAKEY </h1>
    </div>
  );
}

export default Logo;
