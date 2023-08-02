import React from "react";
import './FormExpense.css'

const FormExpense = () =>{
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01'></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2020-1-1' max='2028-1-1'></input>
                </div>
                <div className="new-expense__action">
                    <button className="submit-btn" type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default FormExpense