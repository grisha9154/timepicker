import { mapProps, compose } from "recompose";

import DateSingleSelector from "../components/DateSingleSelector";
import { IContainer } from "./interface";
import { IDateIntervalSelectorState } from "..";

interface IMonthContainer {
  value,
  prevClickHandler,
  nextClickHandler,
  disabled,
};

const normalizeValue = mapProps<IContainer, IDateIntervalSelectorState>(props => ({
  ...props,
  value: props.value.format("MMMM")
}));

const enhance = compose<any, any>( normalizeValue);

export default enhance(DateSingleSelector);
