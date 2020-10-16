import React, { useContext, useState } from "react";

import { ThemeContext } from "styled-components";
import { TodoWrapper } from "./Todo.element";
import Button from "../../styles/Button";

import TodoList from "./TodoList";
import Portal from "../Portal/Portal";
import EditTodoModal from "./EditTodoModal";

function Todo() {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useContext(ThemeContext);

  function handleModalOpen() {
    setIsOpen(true);
  }

  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <TodoWrapper>
      <Button
        size="medium"
        fillColor={colors.green}
        textColor={colors.white}
        onClick={handleModalOpen}
      >
        Add Todo
      </Button>
      <TodoList />
      {isOpen && (
        <Portal>
          <EditTodoModal type="Add" onCloseModal={handleModalClose} />
        </Portal>
      )}
    </TodoWrapper>
  );
}

export default Todo;
