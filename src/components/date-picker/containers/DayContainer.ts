import { mapProps, compose } from "recompose";
import { getRangeDates, IDataRange } from "../helpers/dateHelpers";

import DateRangeSelector from "../components/DateRangeSelector";
import { IDateIntervalSelectorState } from "..";

interface IDayContainerProps {
  values,
  prevClickHandler,
  nextClickHandler,
  disabled,
  ranger,
};

interface IContainer {
  range: any;
  value: IDataRange[];
}

const rangeValues = mapProps<any, any>(props => ({
  ...props,
  values: getRangeDates(props.value, props.range, props.disabledDays)
}));

const enhance = compose<any, any>(rangeValues);

export default enhance(DateRangeSelector);
