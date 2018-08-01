import * as React from 'react';
import { Fragment } from "react"
import { withStateHandlers, withHandlers, compose } from "recompose";
import { ThemeProvider } from "styled-components";

import { primaryTheme } from "./themes/primaryTheme";
import SelectorContainer from "./styled/SelectorContainer";
import DayContainer from "./containers/DayContainer";
import MonthContainer from "./containers/MonthContainer";
import YearContainer from "./containers/YearContainer";

const changeInterval = withStateHandlers(
  ({ range, value }) => ({ currentDate: value }),
  {
    changeInterval: ({ currentDate }, { onChange }) => (count, type) => {
      const newDate = currentDate.clone().add(count, type);

      onChange(newDate.toDate());

      return {
        currentDate: newDate
      };
    }
  }
);

const dayClickHandlers = withHandlers({
  prevDayClickHandler: ({ changeInterval }) => () => {
    changeInterval(-1, "d");
  },
  nextDayClickHandler: ({ changeInterval }) => () => {
    changeInterval(1, "d");
  }
});

const monthClickHandlers = withHandlers({
  prevMonthClickHandler: ({ changeInterval }) => () => {
    changeInterval(-1, "M");
  },
  nextMonthClickHandler: ({ changeInterval }) => () => {
    changeInterval(1, "M");
  }
});

const yearClickHandlers = withHandlers({
  prevYearClickHandler: ({ changeInterval }) => () => {
    changeInterval(-1, "y");
  },
  nextYearClickHandler: ({ changeInterval }) => () => {
    changeInterval(1, "y");
  }
});

const enhance = compose(
  changeInterval,
  dayClickHandlers,
  monthClickHandlers,
  yearClickHandlers
);

const DateIntervalSelector = ({
  value,
  currentDate,
  prevDayClickHandler,
  nextDayClickHandler,
  prevMonthClickHandler,
  nextMonthClickHandler,
  prevYearClickHandler,
  nextYearClickHandler,
  disabled,
  disabledDays
}) => (
  <ThemeProvider theme={primaryTheme}>
    <Fragment>
      <SelectorContainer>
        <MonthContainer
          value={currentDate}
          prevClickHandler={prevMonthClickHandler}
          nextClickHandler={nextMonthClickHandler}
          disabled={disabled}
        />
        <YearContainer
          value={currentDate}
          prevClickHandler={prevYearClickHandler}
          nextClickHandler={nextYearClickHandler}
          disabled={disabled}
        />
      </SelectorContainer>
      <SelectorContainer>
        <DayContainer
          prevClickHandler={prevDayClickHandler}
          nextClickHandler={nextDayClickHandler}
          value={currentDate}
          range={3}
          disabled={disabled}
          disabledDays={disabledDays}
        />
      </SelectorContainer>
    </Fragment>
  </ThemeProvider>
);

export default enhance(DateIntervalSelector);
