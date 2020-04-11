/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect } from "react";
import { createPortal } from "react-dom";

const portal = document.getElementById("portal");
const base = document.createElement("div");
base.classList.add("modal");
base.classList.add("customized-scroll");

const ModalPortal = ({ children }) => {
  useLayoutEffect(() => {
    portal.appendChild(base);
    document.body.classList.add("modal-is-open");
    return () => {
      if (portal.children.length > 0) {
        portal.removeChild(base);
        document.body.classList.remove("modal-is-open");
      }
    };
  }, [base]);

  return createPortal(children, base);
};

export default ModalPortal;
