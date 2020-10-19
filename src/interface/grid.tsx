export interface IGridCard {
  id: number;
  name: string;
  age: number;
  weight: number;
}

export interface GridState {
  gridList: Array<IGridCard>;
}
