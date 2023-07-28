import React from "react";
import './ExpenseDate'
import './ExpenseItem.css'
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props){
        return(
        <Card className="expense-item">
            <ExpenseDate date = {props.date} />
            <div className="expense-item-desc">
                <h2 className="expense-title">{props.title}</h2>
                <div className="expense-amount">${props.amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem  