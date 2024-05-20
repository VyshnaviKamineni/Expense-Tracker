import React, { useState } from 'react';
import './App.css';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      alert('Please enter a description and amount.');
      return;
    }
    const newExpense = { description, amount: parseFloat(amount) };
    setExpenses([...expenses, newExpense]);
    setDescription('');
    setAmount('');
  };

  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <form onSubmit={handleAddExpense}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button type="submit">Add Expense</button>
      </form>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2>Total: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
}

export default ExpenseTracker;
