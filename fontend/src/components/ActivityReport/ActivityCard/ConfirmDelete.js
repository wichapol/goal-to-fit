import React from "react";
import "./ConfirmDelete.css";

function ConfirmDelete() {
  return (
    <div id="myModal" className="modal">
      {/* <!-- Modal content --> */}
      <div className="modal-content">
        <span className="close">closeForm</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default ConfirmDelete;
