import * as React from "react";

import ArrowButton from "./ArrowButton";
import RangeItem from "./RangeItem";
import RangeItemWrapper from "../styled/RangeItemWrapper";

const DateRangeSelector = ({
  values,
  prevClickHandler,
  nextClickHandler,
  disabled
}) => {
  return (
    <RangeItemWrapper>
      <ArrowButton
        disabled={disabled}
        text={"<"}
        clickHandler={prevClickHandler}
      />
      <RangeItemWrapper>
        {values.map(val => (
          <RangeItem
            selected={val.isToday}
            key={val.date}
            dayOfWeek={val.dayOfWeek}
            date={val.date}
            isDisabled={val.isDisabled}
          />
        ))}
      </RangeItemWrapper>
      <ArrowButton
        disabled={disabled}
        text={">"}
        clickHandler={nextClickHandler}
      />
    </RangeItemWrapper>
  );
};

export default DateRangeSelector;
