import moment from "moment";
import "./css/index.css";
import { daysOfWeek } from "./data";
import { useState } from "react";
import { TListItem } from "./types";
import ListItem from "./components/ListItem/ListItem";
import { NewTaskForm } from "./components/NewTaskForm/NewTaskForm";

function App() {
  const [listItems, setListItems] = useState<TListItem[]>([]);

  const today = new Date();
  const weekday = daysOfWeek[today.getDay()];
  const dateString = moment(today).format("ll");

  return (
    <main className="content-container" data-theme="dark">
      <header className="content-header">
        <h1 className="weekday">{weekday}</h1>
        <span className="date">{dateString}</span>
      </header>

      <NewTaskForm listItems={listItems} setListItems={setListItems} />

      <hr className="spacer" />
      <ul className="list-items">
        {listItems.map((item, index) => (
          <ListItem content={item} key={index} />
        ))}
      </ul>
    </main>
  );
}

export default App;
