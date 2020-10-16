import styled from "styled-components";
import Section from "../../styles/Section";
import Modal from "../../styles/Modal";

export const TodoWrapper = styled(Section)`
  margin-top: 60px;
`;

export const AddTodoModalWrapper = styled(Modal)`
  .content {
    font-weight: bold;
    padding: 1rem;
    width: 50%;
    height: auto;
    background-color: ${({ theme: { colors } }) => colors.white};
  }

  .buttons {
    text-align: right;

    button {
      margin-left: 0.4rem;
    }
  }

  .error-log {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    color: ${({ theme: { colors } }) => colors.red};
  }

  h3 {
    margin: 1rem 0;
  }

  textarea {
    resize: none;
  }

  input,
  textarea {
    box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};
    padding: 0.5rem 1.2rem;
    margin-bottom: 0.6rem;
    outline: none;
    border: 0;
    width: 100%;

    :focus {
      border-color: ${({ theme: { colors } }) => colors.blue};
      outline: none;
      box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
        0 0 0 0.2em rgba(3, 102, 214, 0.3);
    }
  }
`;

export const TodoListWrapper = styled.ul`
  margin-top: 2.4rem;
  width: 100&;
  padding: 2.4rem 0;
  background-color: ${({ theme: { colors } }) => colors.gray};

  .none-result {
    line-height: 3rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const TodoCardWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1.2rem;
  margin: 1.2rem;
  border-radius: 0.4rem;

  background-color: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.base};

  .todo-title {
    font-size: 1.8rem;
    font-weight: bold;

    margin-bottom: 0.6rem;
  }

  .buttons {
    button {
      transition: 0.3s;
      margin-left: 0.6rem;

      :hover {
        color: ${({ theme: { colors } }) => colors.blue};
      }
    }

    @media only screen and (max-width: 540px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
