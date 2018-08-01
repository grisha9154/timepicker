import { mapProps, compose } from 'recompose';

import DateSingleSelector from '../components/DateSingleSelector';

const normalizeValue = mapProps(props => ({
    ...props,
    value: props.value.format('YYYY')
}));

const enhance = compose(
    normalizeValue
);

export default enhance(DateSingleSelector);
