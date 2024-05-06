import moment from "moment";
import "./css/index.css";
import { daysOfWeek } from "./data";
import ListItem from "./components/ListItem";
import { useEffect, useState } from "react";
import { TListItem } from "./types";

const someListItems: TListItem[] = [
  { title: "Get an invite for dribbble", subTitle: "one of my goals for 2017" },
  { title: "11am Meeting" },
  { title: "finish Visual Design" },
];

function App() {
  const [listItems, setListItems] = useState<TListItem[]>([]);
  const today = new Date();
  const weekday = daysOfWeek[today.getDay()];
  const dateString = moment(today).format("ll");

  useEffect(() => {
    setListItems(someListItems);
  }, []);

  return (
    <div className="content-container">
      <h1 className="weekday">{weekday}</h1>
      <span className="date">{dateString}</span>
      <hr />
      {listItems.map((item) => (
        <ListItem content={item} />
      ))}
    </div>
  );
}

export default App;
