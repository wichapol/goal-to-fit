import React from "react";
import './Title.css'

const Title = ({ children }) => {
    return (
      <div>                     
            <h3 className="secondary-text-color">{ children } </h3>
      </div>
    );
  }
  
  export default Title;