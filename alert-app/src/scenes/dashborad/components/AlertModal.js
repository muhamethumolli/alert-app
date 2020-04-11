import React from "react";
import ModalPortal from "../../../components/base/Modal";
import AlertForm from "./AlertForm";

const AlertModal = ({ history }) => {
  return (
    <ModalPortal>
      <div class="modal">
        <div class="modal-content">
          <div class="modal-content_header">
            <h1>Add new alert</h1>
            <span class="close-modal" onClick={(_) => history.push("/")}>
              X<i class="mdi mdi-close"></i>
            </span>
          </div>

          <div class="modal-content_main">
            <AlertForm />
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default AlertModal;
