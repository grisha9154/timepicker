import { mapProps, compose } from 'recompose';

import DateSingleSelector from '../components/DateSingleSelector';
import { IDateIntervalSelectorState } from '..';
import { IContainer } from './interface';

interface IYearContainer {
    value,
    prevClickHandler,
    nextClickHandler,
    disabled,
};

const normalizeValue = mapProps<IContainer, IDateIntervalSelectorState >(props => ({
    ...props,
    value: props.value.format('YYYY')
}));

const enhance = compose<any, any>(
    normalizeValue
);

export default enhance(DateSingleSelector);
