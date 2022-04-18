import React from "react";
import './ImageTitle.css'

const ImageTitle = ( { children, imgSrc, classDiv, alt }) => {
    return (
                <div className={classDiv}>
                    <img  src={imgSrc} alt={alt}/>                       
                    <h1 className="secondary-text-color">{children}</h1>
                </div>
    );
}

export default ImageTitle;