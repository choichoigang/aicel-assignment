import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { DemoModalWrapper } from "./Modal.element";
import Button from "../../styles/Button";

interface IDemoModal {
  onCloseModal: () => void;
}

function DemoModal({ onCloseModal }: IDemoModal) {
  const { colors } = useContext(ThemeContext);

  return (
    <DemoModalWrapper>
      <div className="content">
        <p>Modal is Open</p>
        <Button
          size="medium"
          fillColor={colors.red}
          textColor={colors.white}
          onClick={onCloseModal}
        >
          Close
        </Button>
      </div>
    </DemoModalWrapper>
  );
}

export default DemoModal;
