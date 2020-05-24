
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description: 'rent',
    amount: 25000,
    createdAt:-21000
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'coffee',
    amount: 150000,
    createdAt: -1000
}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount:500}));

//store.dispatch(setTextFilter('ffe'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'ryryry',
        description: 'Payments',
        note: 'yoo this a note',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: '2999',
        sort: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};