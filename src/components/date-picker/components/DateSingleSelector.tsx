import * as React from "react";
import ArrowButton from "./ArrowButton";
import { ItemContainers } from "../styled/ItemContainers";
import ItemWrapper from "../styled/RangeItemWrapper";

const getSingleItemContainer = (selected: boolean) => ItemContainers.extend`
  flex-direction: row;
`;

const DataSingleSelector = ({
  value,
  prevClickHandler,
  nextClickHandler,
  disabled
}) =>{
  const SingleItemContainer = getSingleItemContainer(false);
  return (
    <ItemWrapper>
      <ArrowButton
        disabled={disabled}
        small
        text={"<"}
        clickHandler={prevClickHandler}
      />
      <SingleItemContainer>
        <span>{value}</span>
      </SingleItemContainer>
      <ArrowButton
        disabled={disabled}
        small
        text={">"}
        clickHandler={nextClickHandler}
      />
    </ItemWrapper>
  );
} 

export default DataSingleSelector;
