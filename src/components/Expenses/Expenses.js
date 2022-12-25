import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const items = props.items;
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {items.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};
export default Expenses;
