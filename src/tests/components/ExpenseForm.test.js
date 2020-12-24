import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

test("Should Render ExpenseForm Correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("Should Render ExpenseForm With Expense Data Correctly", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should Render Error For INvlid Function", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("Should Set Description on input change", () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test("Should Set Note on Textarea change", () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test("Should set Amount if valid input", () => {
    const value = '15000';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe(value);
});

test("Should not set amount if invalid input", () => {
    const value = '1000.1345';
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    });
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
})

test("Should call onSubmit for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('Should set new date on dateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendat focus onFocusChange', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});