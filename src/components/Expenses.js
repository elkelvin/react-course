import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const items = props.items;
  return (
    <div className="expenses">
      {items.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}
export default Expenses;
