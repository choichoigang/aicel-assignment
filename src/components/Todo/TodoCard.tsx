import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoCard } from "../../modules/Todo/index";

import { TodoCardWrapper } from "./Todo.element";
import EditTodoModal from "./EditTodoModal";

interface ITodoCard {
  todoId: number;
  title: string;
  description: string;
}

function TodoCard({ todoId, title, description }: ITodoCard) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function handleDeleteCard() {
    dispatch(deleteTodoCard(todoId));
  }

  function handleModalOpen() {
    setIsOpen(true);
  }
  function handleModalClose() {
    setIsOpen(false);
  }

  return (
    <TodoCardWrapper>
      <div>
        <h2 className="todo-title">{title}</h2>
        <p className="todo-description">{description}</p>
      </div>
      <div className="buttons">
        <button onClick={handleModalOpen}>Edit</button>
        <button onClick={handleDeleteCard}>Delete</button>
      </div>
      {isOpen && (
        <EditTodoModal
          type="Edit"
          todoId={todoId}
          title={title}
          description={description}
          onCloseModal={handleModalClose}
        />
      )}
    </TodoCardWrapper>
  );
}

export default TodoCard;
