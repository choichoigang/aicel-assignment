export interface ITodoCard {
  id: number;
  title: string;
  description: string;
}

export interface TodoState {
  todoList: Array<ITodoCard>;
}
