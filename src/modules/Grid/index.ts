import { ActionType, createReducer } from "typesafe-actions";
import { GridState, IGridCard } from "../../interface/grid";

const SET_GRID_LIST = "grid/SET_GRID_LIST" as const;

export function setGridList(sortedArr: Array<IGridCard>) {
  return {
    type: SET_GRID_LIST,
    payload: sortedArr,
  };
}

const actions = {
  setGridList,
};

type GridAction = ActionType<typeof actions>;

const initialState: GridState = {
  gridList: [
    {
      id: 1,
      name: "Jack",
      age: 20,
      weight: 70,
    },
    {
      id: 2,
      name: "Lee",
      age: 30,
      weight: 88,
    },
    {
      id: 3,
      name: "Chuck",
      age: 17,
      weight: 75,
    },
    {
      id: 4,
      name: "Ralph",
      age: 41,
      weight: 69,
    },
    {
      id: 5,
      name: "Mark",
      age: 25,
      weight: 80,
    },
  ],
};

const grid = createReducer<GridState, GridAction>(initialState, {
  [SET_GRID_LIST]: (state, action) => ({
    ...state,
    gridList: action.payload,
  }),
});

export default grid;
