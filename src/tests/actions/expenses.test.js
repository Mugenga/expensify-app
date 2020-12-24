import {addExpense, editExpense, removeExpense} from "../../actions/expenses";

test("Should setup remove expense action object", () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        'type':'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test("Should setup edit expense action object", () =>{
    const action = editExpense('123', {amount:100});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123',
        updates:{amount:100}
    });
});

test("Should set up add expense action object with provided values", () => {
    const expenseData = {
        description: 'rent',
        amount: 10000,
        createdAt: 1000,
        note: 'this was last month rent'
    };

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("Should set up add expense action object with default values", () => {
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    };

    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});