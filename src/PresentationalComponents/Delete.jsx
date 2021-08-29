import React from "react";
const DeleteConfirmationModal = (props) => {
  const {
    toggleDeleteModal,
    deleteCallback
  } = props
  return <div>
    <div id="myModal" className="modal" >

      <div className="modal-content">
        <span className="close" onClick={(e) => {
          toggleDeleteModal(false);
        }}>&times;</span>
        <span> Are you sure you want to delete this ?</span>
        <br />
        <button id="id_truebtn" onClick={(e) => {
          deleteCallback();
        }}>Yes</button>
        <button id="id_falsebtn" onClick={(e) => {
          toggleDeleteModal(false);
        }}>No</button>
      </div>

    </div >

  </div>
}


export default DeleteConfirmationModal;
