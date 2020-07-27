import React from "react";
import { ModalContainer, ScreenOfDarkness } from "./styles";

function Modal({ children, onClose }) {
  return (
    <ScreenOfDarkness onClick={onClose}>
      <ModalContainer onClick={(e)=>{e.stopPropagation()}}>{children}</ModalContainer>
    </ScreenOfDarkness>
  );
}
export default Modal;
