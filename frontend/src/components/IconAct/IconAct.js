import React from 'react';
import './IconAct.css';

function IconAct({ src,alt,iconName="",setSelect, name ,actType,num }) {

  function iconType(actType){
    if(actType==="indoor"){
      return <i className="fa-solid fa-house primary-button-color"></i>;
    } else if (actType==="outdoor"){
      return <i className="fa-solid fa-sun secondary-button-color"></i> ;     
    } else{
      return null;
    }

  }

  return (
    <div  className="block-icon" >
      <button className="button-icon" onClick={setSelect} name={name}  >
        <img src={src} alt={alt} className="icon" name={name} />
        <p className="act-type">
          {iconType(actType)}          
        </p>
      </button>
      <div className="secondary-icon-color middle-fon icon-name" hidden={iconName===""?true:false}>{iconName}</div>
    </div>

  );
}

export default IconAct;
