import React, {useState} from "react";
import './ExpenseItem.css'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { set } from "lodash";



const ExpenseItem = (props) =>{
    const [newTitle, setTitle] = useState(props.title)

    const clickHandler = () =>{
        setTitle("Updated!!")
        console.log("hello!!")
    }
    return(
    <Card className="expense-item">
        <ExpenseDate date = {props.date} />
        <div className="expense-item-desc">
            <h2 className="expense-title">{newTitle}</h2>
            <div className="expense-amount">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Click</button>
    </Card>
    )
}
export default ExpenseItem  