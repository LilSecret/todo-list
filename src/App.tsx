import moment from "moment";
import "./css/index.css";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function App() {
  const today = new Date();
  const weekday = daysOfWeek[today.getDay()];
  const dateString = moment(today).format("ll");

  console.log(weekday);
  console.log(dateString);

  return (
    <div className="content-container">
      <h1 className="weekday">{weekday}</h1>
      <span className="date">{dateString}</span>
    </div>
  );
}

export default App;
