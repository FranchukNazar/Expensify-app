import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { AddExpense, addExpense } from '../actions/expenses';


const AddExpensePage = (props) => (
    <div>
        <h1>Add expens</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);


export default connect()(AddExpensePage);