import React from "react"
import Expenses from "./components/Expenses/Expenses"
 
function App() {
    const expenses = [
        {
            expenseId: 1,
            expenseDate: new Date(2023, 7, 23),
            expenseTitle: 'TV',
            expenseAmount: 230.20,
        },
        {
            expenseId: 2,
            expenseDate: new Date(2008, 5, 8),
            expenseTitle: 'Computer',
            expenseAmount: 230.20,
        },
        {
            expenseId: 3,
            expenseDate: new Date(2019, 3, 22),
            expenseTitle: 'Car Insurance',
            expenseAmount: 230.20,
        },
        {
            expenseId: 4,
            expenseDate: new Date(2022, 3, 22),
            expenseTitle: 'Water pool',
            expenseAmount: 230.20,
        },
        {
            expenseId: 5,
            expenseDate: new Date(2015, 7, 6),
            expenseTitle: 'Home',
            expenseAmount: 230.20,
        },
    ]
    return(
        <div>
            <h2>hello</h2>
            <Expenses items={expenses}/>
        </div>
    )
}

export default App