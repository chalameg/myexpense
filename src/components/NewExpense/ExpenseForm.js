import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [data, setData] = useState({
        title:"",
        amount:0.01,
        date: null
    });

    const titleChangeHandler = (e) => {
        setData((prevState) => {
            return {...prevState, title: e.target.value}
        })
    }

    const amountChangeHandler = (e) => {
        setData((prevState) => {
            return {...prevState, amount: e.target.value}
        })
    }

    const dateChangeHandler = (e) => {
        setData((prevState) => {
            return {...prevState, date: new Date(e.target.value)}
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setData({
                title:"",
                amount:"", 
                date:""
            })

        props.onSaveExpenseData(data)
        // console.log(data)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={data.title}/>
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step="0.01" onChange={amountChangeHandler} value={data.amount}/>
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' step="2023-12-31" onChange={dateChangeHandler} value={data.date}/>
                </div>

                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm