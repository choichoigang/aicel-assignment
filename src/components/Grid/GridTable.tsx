import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules/index";
import { setGridList } from "../../modules/Grid/index";

import { GridTableWrapper } from "./Grid.element";

import TableCard from "./TableCard";

import { changeToElement } from "../../util/grid";

function GridTable() {
  const dispatch = useDispatch();
  const { gridList } = useSelector((state: RootState) => state.grid);

  const [renderGridList, setRenderGridList] = useState(gridList);
  const [isAscendName, setIsAscendName] = useState(true);
  const [isAscendAge, setIsAscendAge] = useState(true);
  const [isAscendWeight, setIsAscendWeight] = useState(true);

  function sortGridList(
    sortOrder: boolean,
    keyword: "name" | "age" | "weight"
  ) {
    if (!sortOrder)
      return gridList.sort((a, b) => {
        return a[keyword] < b[keyword] ? -1 : a[keyword] > b[keyword] ? 1 : 0;
      });

    if (sortOrder)
      return gridList.sort((a, b) => {
        return b[keyword] < a[keyword] ? -1 : b[keyword] > a[keyword] ? 1 : 0;
      });
  }

  function handleOnClickName() {
    const sortedArr = sortGridList(isAscendName, "name");

    dispatch(setGridList(sortedArr));
    setIsAscendName(!isAscendName);
  }
  function handleOnClickAge() {
    const sortedArr = sortGridList(isAscendAge, "age");

    dispatch(setGridList(sortedArr));
    setIsAscendAge(!isAscendAge);
  }
  function handleOnClickWeight() {
    const sortedArr = sortGridList(isAscendWeight, "weight");

    dispatch(setGridList(sortedArr));
    setIsAscendWeight(!isAscendWeight);
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;

    const newGridList = gridList.filter((el) => {
      return (
        changeToElement(el.name).includes(targetValue.toLowerCase()) ||
        changeToElement(el.age).includes(targetValue) ||
        changeToElement(el.weight).includes(targetValue)
      );
    });

    setRenderGridList(newGridList);
  }

  return (
    <>
      <input
        type="text"
        placeholder="필터링 할 값을 입력해 주세요."
        onChange={handleOnChange}
      />
      <GridTableWrapper
        isName={isAscendName}
        isAge={isAscendAge}
        isWeight={isAscendWeight}
      >
        <tr className="header-table">
          <th>
            <p>name</p>
            <span onClick={handleOnClickName} className="triangle name" />
          </th>
          <th>
            <p>age</p>
            <span onClick={handleOnClickAge} className="triangle age" />
          </th>
          <th>
            <p>weight</p>
            <span onClick={handleOnClickWeight} className="triangle weight" />
          </th>
        </tr>
        {renderGridList.map((el) => {
          return (
            <TableCard
              key={el.id}
              name={el.name}
              age={el.age}
              weight={el.weight}
            />
          );
        })}
      </GridTableWrapper>
    </>
  );
}

export default GridTable;
