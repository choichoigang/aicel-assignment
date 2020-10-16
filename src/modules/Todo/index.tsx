import { ActionType, createReducer } from "typesafe-actions";
import { ITodoCard, TodoState } from "../../interface/todo";

const ADD_TODO_CARD = "todo/ADD_TODO_CARD" as const;
const DELETE_TODO_CARD = "todo/DELETE_TODO_CARD" as const;
const EDIT_TODO_CARD = "todo/EDIT_TODO_CARD" as const;

export function addTodoCard(newCardObj: ITodoCard) {
  return {
    type: ADD_TODO_CARD,
    payload: newCardObj,
  };
}
export function deleteTodoCard(id: number) {
  return {
    type: DELETE_TODO_CARD,
    payload: id,
  };
}

export function editTodoCard(newCardObj: ITodoCard) {
  return {
    type: EDIT_TODO_CARD,
    payload: newCardObj,
  };
}

const actions = {
  addTodoCard,
  deleteTodoCard,
  editTodoCard,
};

type TodoAction = ActionType<typeof actions>;

const initialState: TodoState = {
  todoList: [
    {
      id: 1,
      title: "Test 1",
      description: "Test description",
    },
    {
      id: 2,
      title: "Test 1",
      description: "Test description",
    },
    {
      id: 3,
      title: "Test 1",
      description: "Test description",
    },
  ],
};

const todo = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO_CARD]: (state, action) => ({
    todoList: [...state.todoList, action.payload],
  }),
  [DELETE_TODO_CARD]: (state, action) => ({
    todoList: state.todoList.filter((el) => el.id !== action.payload),
  }),
  [EDIT_TODO_CARD]: (state, action) => ({
    todoList: state.todoList.map((todoEl) =>
      todoEl.id === action.payload.id ? (todoEl = action.payload) : todoEl
    ),
  }),
});

export default todo;
