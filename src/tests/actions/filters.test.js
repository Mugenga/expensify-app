import { setStartDate, setEndDate,sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";
import moment from "moment";

test('Should Generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

test('Should Generate set start date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

test('Should Generate SortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('Should Generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test('Should Generate setTextFilter action object with value', () => {
    const action = setTextFilter('text');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:'text'
    });
});

test('Should Generate setTextFilter action object without value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});