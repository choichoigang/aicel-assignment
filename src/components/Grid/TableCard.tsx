import React from "react";
import { TableCardWrapper } from "./Grid.element";

interface ITableCard {
  name: string;
  age: number;
  weight: number;
}

const TableCard = ({ name, age, weight }: ITableCard) => {
  return (
    <TableCardWrapper>
      <th>{name}</th>
      <th>{age}</th>
      <th>{weight}</th>
    </TableCardWrapper>
  );
};

export default TableCard;
