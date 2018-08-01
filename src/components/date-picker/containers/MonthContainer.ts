import { mapProps, compose } from "recompose";

import DateSingleSelector from "../components/DateSingleSelector";

const normalizeValue = mapProps(props => ({
  ...props,
  value: props.value.format("MMMM")
}));

const enhance = compose(
  normalizeValue
);

export default enhance(DateSingleSelector);
