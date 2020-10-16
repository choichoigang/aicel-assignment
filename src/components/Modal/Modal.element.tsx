import styled from "styled-components";
import Section from "../../styles/Section";
import Modal from "../../styles/Modal";

export const ModalWrapper = styled(Section)`
  display: flex;
  margin-top: 60px;
`;

export const DemoModalWrapper = styled(Modal)`
  .content {
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: white;
    padding: 1rem;
    width: 300px;
    height: auto;
    border-radius: 0.8rem;
    line-height: 3rem;
  }
`;
