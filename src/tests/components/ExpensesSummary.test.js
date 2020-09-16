import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render single expense Summary correctly', () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={1} expensesTotal={100} />
    );
    expect(wrapper).toMatchSnapshot();
});

test('Should render multiple expenses Summary correctly', () => {
    const wrapper = shallow(
        <ExpensesSummary expenseCount={2} expensesTotal={100} />
    );
    expect(wrapper).toMatchSnapshot();
});
