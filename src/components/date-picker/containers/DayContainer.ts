import { mapProps, compose } from "recompose";
import { getRangeDates } from "../helpers/dateHelpers";

import DateRangeSelector from "../components/DateRangeSelector";

const rangeValues = mapProps(props => ({
  ...props,
  values: getRangeDates(props.value, props.range, props.disabledDays)
}));

const enhance = compose(rangeValues);

export default enhance(DateRangeSelector);
