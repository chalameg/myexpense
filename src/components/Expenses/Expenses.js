  import React, { useState } from 'react'
  import Card from '../UI/Card'

  import ExpenseItem from './ExpenseItem'
  import './Expenses.css'
  import ExpensesFilter from './ExpensesFilter'

  function Expenses({expenses}) {
    const [filterDate, setFilterDate] = useState("2020");

    const FilterDateSelectedHandler = (date) =>{
      setFilterDate(date)
    }

    return (
    <div>
      <Card className='expenses'>
      <ExpensesFilter selected={filterDate} onFilterDateSelected={FilterDateSelectedHandler}/>
      {expenses.map(expense => {
          return <ExpenseItem expense={expense} key={expense.key}/>
        })}
      </Card>
    </div>
    )
  }

  export default Expenses