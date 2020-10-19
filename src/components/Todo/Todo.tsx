import React, { useContext, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";

import { ThemeContext } from "styled-components";
import { TodoWrapper } from "./Todo.element";
import Button from "../../styles/Button";

import TodoList from "./TodoList";
import Portal from "../Portal/Portal";
import EditTodoModal from "./EditTodoModal";

import { MAX_TODO_LIST } from "../../constants/todo";

function Todo() {
  const { todoList } = useSelector((state: RootState) => state.todo);

  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useContext(ThemeContext);

  function handleModalOpen() {
    if (todoList.length === MAX_TODO_LIST)
      return alert("최대 5개 이상 생성할 수 없습니다.");

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
