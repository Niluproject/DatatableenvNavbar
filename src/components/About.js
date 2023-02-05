import React from 'react'
import { Link } from "react-router-dom";
console.log(process.env);
function About(props) {
    return (
      <div>
        <h1>About Page Key using env : {process.env.REACT_APP_SECRET_KEY}</h1>
        <p>Hello page is the  best page for using common url: {process.env.REACT_APP_COMMAN_URL} </p>
        <h1>Hello {props.name}</h1>
        <Link to="/">Go to Home page</Link>
      </div> 
    );
  }
  
  export default About;