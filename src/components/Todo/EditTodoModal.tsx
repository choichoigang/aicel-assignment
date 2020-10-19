import React, { useContext, useState } from "react";

import { useDispatch } from "react-redux";
import { addTodoCard, editTodoCard } from "../../modules/Todo/index";

import { ThemeContext } from "styled-components";
import { AddTodoModalWrapper } from "./Todo.element";
import Button from "../../styles/Button";

import { MAX_TITLE_LENGTH, MAX_DESCRIPTION_LENGTH } from "../../constants/todo";

interface IEditTodoModal {
  type: string;
  /* Type이 Edit일 때 todoId , title , description 필수 값 */

  todoId?: number;
  title?: string;
  description?: string;

  onCloseModal: () => void;
}

function EditTodoModal({
  type,
  onCloseModal,
  title = "",
  description = "",
  todoId,
}: IEditTodoModal) {
  const dispatch = useDispatch();

  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);

  const { colors } = useContext(ThemeContext);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTitleValue(e.target.value);
  }

  function handleChnageTextarea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDescriptionValue(e.target.value);
  }

  function handleSubmitTodo() {
    if (!titleValue.length) return alert("제목을 입력해 주세요.");
    if (
      titleValue.length > MAX_TITLE_LENGTH ||
      descriptionValue.length > MAX_DESCRIPTION_LENGTH
    )
      return alert("입력 범위를 확인해 주세요.");

    if (type === "Add") {
      dispatch(
        addTodoCard({
          id: Math.floor(Math.random() * 200),
          title: titleValue,
          description: descriptionValue,
        })
      );
      onCloseModal();
    }

    if (type === "Edit") {
      dispatch(
        editTodoCard({
          id: todoId,
          title: titleValue,
          description: descriptionValue,
        })
      );
      onCloseModal();
    }
  }

  return (
    <AddTodoModalWrapper>
      <div className="content">
        <div className="title-content">
          <div>
            <h3>TITLE</h3>
            {titleValue.length > MAX_TITLE_LENGTH && (
              <p className="error-log">최대 입력을 초과했습니다.</p>
            )}
          </div>
          <input
            type="text"
            placeholder="최대 15자까지 입력 가능합니다."
            onChange={handleChangeInput}
            value={titleValue}
          />
        </div>

        <div className="description-content">
          <div>
            <h3>DESCRIPTION</h3>
            {descriptionValue.length > MAX_DESCRIPTION_LENGTH && (
              <p className="error-log">최대 입력을 초과했습니다.</p>
            )}
          </div>
          <textarea
            name="todo description"
            id="todo description"
            cols={30}
            rows={10}
            placeholder="최대 150자까지 입력 가능합니다."
            onChange={handleChnageTextarea}
            value={descriptionValue}
          ></textarea>
        </div>

        <div className="buttons">
          <Button
            size="small"
            fillColor={colors.green}
            textColor={colors.white}
            onClick={handleSubmitTodo}
          >
            {type}
          </Button>
          <Button
            size="small"
            fillColor={colors.red}
            textColor={colors.white}
            onClick={onCloseModal}
          >
            Cancel
          </Button>
        </div>
      </div>
    </AddTodoModalWrapper>
  );
}

export default EditTodoModal;
