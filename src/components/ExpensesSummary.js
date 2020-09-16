import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => (
    <div>
        <h1>
            Viewing {props.expenseCount}{' '}
            {props.expenseCount > 1 ? 'expenses' : 'expense'} totalling{' '}
            {numeral(props.expensesTotal / 100).format('$0,0.00')}
        </h1>
    </div>
);

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: getTotalExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
