import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});

//should add an expenses
test('should add an expenses', () => {
    const expense = {
        id: '4',
        description: 'Internet',
        note: '',
        amount: 6500,
        createdAt: moment(0).add(5, 'days').valueOf()
    };

    const action = {
        type: 'ADD_EXPENSE',
        expense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, expense]);
});

//should edit an expense
test('should edit an expense', () => {
    const updates = {
        amount: 250
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    };

    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(updates.amount);
});

// should not edit expense if expense not found
test('should not edit expense if expense not found', () => {
    const updates = {
        amount: 250
    };

    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});
