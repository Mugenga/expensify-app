import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test("should set up default filter value", () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("should set sort by to amount", () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text:'',
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("should set sort by to date", () => {
    const currentState = {
        text:'',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = {type:'SORT_BY_DATE'};

    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test("Should set text filter", () => {
    const state = filtersReducer(undefined, {type:'SET_TEXT_FILTER', text:'text'});
    expect(state).toEqual({
        text:'text',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test("Should set start date filter", () => {
    const state = filtersReducer(undefined, {type:'SET_START_DATE', date:moment(0)});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment(0),
        endDate: moment().endOf('month')
    });
});

test("Should set end date filter", () => {
    const state = filtersReducer(undefined, {type:'SET_END_DATE', date:moment(0)});
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment(0)
    });
});