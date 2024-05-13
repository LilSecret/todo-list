import moment from "moment";
import "./css/index.css";
import { daysOfWeek } from "./data";
import ListItem from "./components/ListItem/ListItem";
import { NewTaskForm } from "./components/NewTaskForm/NewTaskForm";
import { useListItems } from "./hooks/ListItemContext";

function App() {
  const today = new Date();
  const weekday = daysOfWeek[today.getDay()];
  const dateString = moment(today).format("ll");

  const { listItems } = useListItems();

  return (
    <main className="content-container" data-theme="dark">
      <header className="content-header">
        <h1 className="weekday">{weekday}</h1>
        <span className="date">{dateString}</span>
      </header>

      <NewTaskForm />

      <hr className="spacer" />
      <ul className="list-items">
        {listItems.map((item, index) => (
          <ListItem item={item} key={index} />
        ))}
      </ul>
    </main>
  );
}

export default App;
