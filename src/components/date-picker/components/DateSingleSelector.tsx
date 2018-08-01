import * as React from "react";
import ArrowButton from "./ArrowButton";
import { getSingleItemContainer } from "../styled/ItemContainers";
import ItemWrapper from "../styled/RangeItemWrapper";

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
