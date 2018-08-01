import * as React from "react";
import { RangeItemTextTheme} from "../styled/RangeItemText";
import { ItemContainers } from "../styled/ItemContainers";
import styled from "styled-components";

const getRangeItemContainer = (selected: boolean) => ItemContainers.extend`
  background-color: ${({ theme: { bgSelected, bgPrimary } }) =>
    selected ? bgSelected : bgPrimary};
  flex-direction: column;
  width: ${({ theme: { rangeWidth } }) => rangeWidth};
  height: ${({ theme: { rangeHeight } }) => rangeHeight};
`;

const getRangeItemText = (disabled: boolean, selected: boolean, secondary: boolean ) =>  styled.span`
  color: ${disabled ? RangeItemTextTheme.colorDisabled : selected ? RangeItemTextTheme.colorSelected : RangeItemTextTheme.colorText}
  font-size: ${(secondary ? "x-small" : "x-large")};
  text-transform: uppercase;
`;

const RangeItem = ({ dayOfWeek, date, selected, isDisabled }) => {
  const RangeItemDate = getRangeItemText(isDisabled, selected, false);
  const RangeItemDay = getRangeItemText(isDisabled, selected, true);
  const RangeItemContainer = getRangeItemContainer(selected);
  return (
  <RangeItemContainer >
    <RangeItemDate >
      {date}
    </RangeItemDate>
    <RangeItemDay >
      {dayOfWeek}
    </RangeItemDay>
  </RangeItemContainer>
)};

export default RangeItem;
