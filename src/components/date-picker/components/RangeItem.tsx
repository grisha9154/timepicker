import * as React from "react";
import { getRangeItemContainer } from "../styled/ItemContainers";
import {getRangeItemText, RangeItemTextTheme} from "../styled/RangeItemText";

const RangeItem = ({ dayOfWeek, date, selected, isDisabled }) => {
  const RangeItemDate = getRangeItemText(isDisabled, selected, false);
  const RangeItemDay = getRangeItemText(isDisabled, selected, true);
  const RangeItemContainer = getRangeItemContainer(selected);
  return (
  <RangeItemContainer >
    <RangeItemDate {...RangeItemTextTheme} >
      {date}
    </RangeItemDate>
    <RangeItemDay {...RangeItemTextTheme} >
      {dayOfWeek}
    </RangeItemDay>
  </RangeItemContainer>
)};

export default RangeItem;
