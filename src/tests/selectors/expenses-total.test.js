import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add app a single expense', () => {
    const expense = [{ amount: 50 }];
    const result = getExpensesTotal(expense);
    expect(result).toBe(expense[0].amount);
});

test('should correctly add up a multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195);
});
