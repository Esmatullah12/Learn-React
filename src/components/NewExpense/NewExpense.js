import React from "react";
import './NewExpense.css'
import FormExpense from './FormExpense'

const NewExpense = () =>{
    return(
        <div className="new-expense-container">
            <FormExpense></FormExpense>
        </div>
    )
}

export default NewExpense