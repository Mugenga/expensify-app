import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';

test("should set up state", () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test("should remove expense by id", () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test("should not remove expense if id not found", () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:-1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id:'4',
            description:'Internet',
            note:'',
            amount:195,
            createdAt:0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses,action.expense]);
});

test("Should edit an expense with id", () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id:expenses[1].id,
        updates: {
            description:'internet'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe(action.updates.description);
});

test("Should edit an expense without a valid id", () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description:'internet'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});