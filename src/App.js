import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./component/Expenses/ExpenseItem";
import Expenses from "./component/Expenses/Expenses";

const expenses = [
    {
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28)
    },
    {
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 5, 12)

    },
    {
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 28)
    },
    {
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12)
    }
]

const App = () => {
  return (
    <div className="App">
        <div className="main">
            <Expenses items={expenses} />
        </div>
    </div>
  );
}

export default App;
