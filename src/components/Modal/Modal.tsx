import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import { ModalWrapper } from "./Modal.element";
import Button from "../../styles/Button";

import Portal from "../Portal/Portal";
import DemoModal from "./DemoModal";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useContext(ThemeContext);

  function handleModalOpen() {
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <ModalWrapper>
      <Button
        size="medium"
        fillColor={colors.green}
        textColor={colors.white}
        onClick={handleModalOpen}
      >
        Show Modal
      </Button>
      {isOpen && (
        <Portal>
          <DemoModal onCloseModal={handleModalClose} />
        </Portal>
      )}
    </ModalWrapper>
  );
}

export default Modal;
