import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import { ModalWrapper } from "./Modal.element";
import Button from "../../styles/Button";

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
    </ModalWrapper>
  );
}

export default Modal;
