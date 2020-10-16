import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/index";

import { TodoListWrapper } from "./Todo.element";

import TodoCard from "./TodoCard";

function TodoList() {
  const { todoList } = useSelector((state: RootState) => state.todo);

  return (
    <TodoListWrapper>
      {todoList.length ? (
        <>
          {todoList.map((el) => {
            return (
              <TodoCard
                todoId={el.id}
                title={el.title}
                description={el.description}
              />
            );
          })}
        </>
      ) : (
        <li className="none-result">
          <p>There aren’t any open Todo</p>
          <p>Please add Todo</p>
        </li>
      )}
    </TodoListWrapper>
  );
}

export default TodoList;
